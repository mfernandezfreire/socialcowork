// navbar/Navbar.js
import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import AuthService from "../auth/AuthService";
import axios from "axios";
import "./Projectcolaborator.scss";
import Colaborators from "../colaborators/Colaborators";

class Projectcolaborator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      projectcolaborator: [],
      projectcolaborators: []
    };
    this.service = new AuthService();
  }

  componentDidMount = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/projectadmin/${this.props.match.params.id}`
      )
      .then(responseFromApi => {
        this.setState({
          projectcolaborator: responseFromApi.data,
          projectcolaborators: responseFromApi.data.id_colaboradores
        });
      });
  };

  render() {
    console.log(this.state.projectcolaborators)
    return (
      <div class="project_colaborator_home">
        <h1>{this.state.projectcolaborator.nombre}</h1>
        <div class="project_colaborator_profesional">
        <div class="project_colaborator_blocks">
          <div class="project_colaborator_block">
            <fieldset>
            <legend><h2>Descripción del proyecto</h2></legend>
            <h3>Fase del proyecto</h3>
            <p>{this.state.projectcolaborator.fase}</p>
            <h3>Colectivo al que atiende</h3>
            <p>{this.state.projectcolaborator.colectivo}</p>
            <h3>Descripción del proyecto</h3>
            <p>{this.state.projectcolaborator.descripcion_del_proyecto}</p>
            <h3>Lugar de ejecución</h3>
            <p>{this.state.projectcolaborator.lugar_de_ejecucion}</p>
            </fieldset>
          </div>
          <div class="project_colaborator_block">
            <fieldset>
            <legend><h2>Colaboradores</h2></legend>
            <div>
              {this.state.projectcolaborators.map((project) => (
                <Colaborators key="project._id" nombre={project.nombre} apellidos={project.apellidos} username={project.username} Email={project.email} Telefono={project.telefono} perfil_de_linkedin={project.perfil_de_linkedin} profesion={project.perfil_de_linkedin}/>
              ))}
            </div>
            </fieldset>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Projectcolaborator;
