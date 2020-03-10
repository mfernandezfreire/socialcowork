// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import Axios from "axios";
import Projects from "../projects/Projects";
import Projectscolaborator from "../projectscolaborator/Projectscolaborator";
import Projectscompany from "../projectscompany/Projectscompany"
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      projectsadmin: [],
      projectscolaborator: [],
      projectscompany: []
    };
    this.service = new AuthService();
  }



  componentDidMount = () => {
    Axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/projectsadmin/${this.props.userInSession._id}`
      )
      .then(responseFromApi => {
        this.setState({
          projectsadmin: responseFromApi.data
        });
      });
    Axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/projectscolaborator/${this.props.userInSession._id}`
      )
      .then(responseFromApi => {
        this.setState({
          projectscolaborator: responseFromApi.data
        });
      });
    Axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/projectscompany/${this.props.userInSession._id}`
      )
      .then(responseFromApi => {
        this.setState({
          projectscompany: responseFromApi.data
        });
      });

  };

  render() {
    console.log(this.props.userInSession.rol);
    console.log(this.state.projectscolaborator);
    console.log(this.state.projectscompany);
    if (this.props.userInSession.rol === "Profesional") {

      return (
        <div class="project_profesional_home">
          <h1>Hola {this.props.userInSession.nombre}</h1>
          <div class="project_profesional">
            <div class="project_profesional_blocks">
              <fieldset>
                <legend><img className="svg" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583743040/project-management_lr6ikp.svg"></img><h2>Proyectos como Administrador</h2></legend>
                <div class="projects_profesional_block">
                  {this.state.projectsadmin.map(project => (
                    <Projects
                      imagen={project.image}
                      nombre={project.nombre}
                      fase={project.fase}
                      colectivo={project.colectivo}
                      lugar_de_ejecucion={project.lugar_de_ejecucion}
                      _id={project._id}
                    ></Projects>
                  ))}
                </div>
                <button><Link className="anchors" to="/createaproject">Crea un proyecto</Link></button>
              </fieldset>
            </div>
            <div class="project_profesional_blocks">
              <fieldset>
                <legend><img className="svg" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583743047/team_llfin5.svg"></img><h2>Proyectos como Colaborador</h2></legend>
                <div class="projects_profesional_block">
                  {this.state.projectscolaborator.map(project => (
                    <Projectscolaborator
                      colaborador={this.props.userInSession._id}
                      imagen={project.image}
                      nombre={project.nombre}
                      fase={project.fase}
                      colectivo={project.colectivo}
                      lugar_de_ejecucion={project.lugar_de_ejecucion}
                      _id={project._id}
                    ></Projectscolaborator>
                  ))}
                </div>
                <button><Link className="anchors" to="/allprojects">Colabora</Link></button>
              </fieldset>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="project_profesional_home">
          <h1>Bienvenida "{this.props.userInSession.nombre}"</h1>
          <div class="project_profesional">
            <div class="project_profesional_blocks">
              <fieldset>
                <legend><img className="svg" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583782165/crm_yzgdd0.svg"></img><h2>Proyectos que sigues</h2></legend>
                <div class="projects_profesional_block">
                  {this.state.projectscompany.map(project => (
                    <Projectscompany
                      imagen={project.image}
                      nombre={project.nombre}
                      fase={project.fase}
                      colectivo={project.colectivo}
                      lugar_de_ejecucion={project.lugar_de_ejecucion}
                      _id={project._id}
                    ></Projectscompany>
                  ))}
                </div>
              </fieldset>
            </div>
            <div class="project_profesional_blocks">
              <fieldset  >
                <legend><img className="svg" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583782165/innovation_opym6n.svg"></img><h2>Busca Proyectos</h2></legend>
                <button className="buttoncompany"><Link className="anchorscompany" to="/allprojectscompany">Ver</Link></button>
              </fieldset>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Home;
