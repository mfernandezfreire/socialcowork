// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import axios from "axios";
import Projects from "../projects/Projects";
import Projectscolaborator from "../projectscolaborator/Projectscolaborator";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      projectsadmin: [],
      projectscolaborator: []
    };
    this.service = new AuthService();
  }

  componentDidMount = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/projectsadmin/${this.props.userInSession._id}`
      )
      .then(responseFromApi => {
        this.setState({
          projectsadmin: responseFromApi.data
        });
      });
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/projectscolaborator/${this.props.userInSession._id}`
      )
      .then(responseFromApi => {
        this.setState({
          projectscolaborator: responseFromApi.data
        });
      });
  };

  render() {
    console.log(this.state.projectsadmin);
    console.log(this.state.projectscolaborator);
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
  }
}

export default Home;
