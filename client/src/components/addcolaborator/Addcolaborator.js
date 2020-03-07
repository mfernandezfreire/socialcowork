// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import axios from "axios"
import Allprojects from "../allprojects/Allprojects"

class Addcolaborators extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        loggedInUser: null ,
        allprojects: [],
   
    };
    this.service = new AuthService();
  }


  componentDidMount = () => {
    axios.get(`http://localhost:3010/api/user/allprojects`)
      .then(responseFromApi => {
        this.setState({
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
          {this.state.allprojects.map((project) => (
                        <Allprojects nombre={project.nombre} fase={project.fase} colectivo={project.colectivo} descripcion_del_proyecto={project.descripcion_del_proyecto} profesionales_necesarios={project.profesionales_necesarios} lugar_de_ejecución={project.lugar_de_ejecución} _id={project._id}></Allprojects>
                    ))}
          </div>
        </nav>
        
      );
    }
  }

export default Addcolaborators;
