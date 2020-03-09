// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import axios from "axios"
import Allprojects from "../allprojects/Allprojects"
import Axios from "axios";
import Allprojectscompany from "../allprojectscompany/Allprojectscompany";




class Addcolaborators extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInUser: null ,
      id: "",
      allprojects: []
    };
    this.service = new AuthService();
  }
  

  componentDidMount = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/user/allprojects`)
      .then(responseFromApi => {
        this.setState({
          id: "",
          allprojects: responseFromApi.data
        })
      })
  }
  
  render() {
        console.log(this.state.projectsadmin)
        console.log(this.state.projectscolaborator)
      return (
        <nav class="project_profesional_home">
          <h1>Todos los proyectos</h1>
          <div>
          {this.state.allprojects.filter((project) => !(this.props.userInSession._id in project)).map((project) => (
                        <Allprojectscompany colaborador={this.props.userInSession._id} img={project.image} nombre={project.nombre} fase={project.fase} colectivo={project.colectivo} descripcion_del_proyecto={project.descripcion_del_proyecto} profesionales_necesarios={project.profesionales_necesarios} lugar_de_ejecución={project.lugar_de_ejecucion} _id={project._id}></Allprojectscompany>
                    ))}
          </div>
        </nav>
        
      );
    }
  }

export default Addcolaborators;
