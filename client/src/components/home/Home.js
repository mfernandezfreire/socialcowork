// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import axios from "axios";
import Projects from "../projects/Projects";
import Projectscolaborator from "../projectscolaborator/Projectscolaborator";
import "./Home.css";

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
        <h1>¡¡Hola {this.props.userInSession.nombre}!!</h1>
        <div class="project_profesional">
        <div class="project_profesional_blocks">
          <h2>Administrador</h2>
          <div class="projects_profesional_block">
            {this.state.projectsadmin.map(project => (
              <Projects
                nombre={project.nombre}
                fase={project.fase}
                colectivo={project.colectivo}
                descripcion_del_proyecto={project.descripcion_del_proyecto}
                profesionales_necesarios={project.profesionales_necesarios}
                lugar_de_ejecución={project.lugar_de_ejecución}
                _id={project._id}
              ></Projects>
            ))}
          </div>
          <button><Link to="/createaproject">Crea un proyecto</Link></button>
        </div> 
        <div class="project_profesional_blocks">
          <h2>Colaborador</h2>
          <div class="projects_profesional_block">
            {this.state.projectscolaborator.map(project => (
              <Projectscolaborator
                nombre={project.nombre}
                fase={project.fase}
                colectivo={project.colectivo}
                descripcion_del_proyecto={project.descripcion_del_proyecto}
                profesionales_necesarios={project.profesionales_necesarios}
                lugar_de_ejecución={project.lugar_de_ejecución}
                _id={project._id}
              ></Projectscolaborator>
            ))}
          </div>
          <button><Link to="/allprojects">Colabora</Link></button>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
