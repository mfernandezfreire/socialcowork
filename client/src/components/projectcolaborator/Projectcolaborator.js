// navbar/Navbar.js
import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import AuthService from "../auth/AuthService";
import axios from "axios";
import "./Projectcolaborator.css";
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
        `http://localhost:3010/api/user/projectadmin/${this.props.match.params.id}`
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
      <div class="project_colaborator">
        <h1>{this.state.projectcolaborator.nombre}</h1>
        <div class="project_colaborator_blocks">
          <div class="project_colaborator_block">
            <h2>Descripción del proyecto</h2>
            <h3>Fase del proyecto</h3>
            <p>{this.state.projectcolaborator.fase}</p>
            <h3>Colectivo al que atiende</h3>
            <p>{this.state.projectcolaborator.colectivo}</p>
            <h3>Descripción del proyecto</h3>
            <p>{this.state.projectcolaborator.descripcion_del_proyecto}</p>
            <h3>Lugar de ejecución</h3>
            <p>{this.state.projectcolaborator.lugar_de_ejecución}</p>
          </div>
          <div class="project_colaborator_block">
            <h2>Colaboradores</h2>
            <div>
              {this.state.projectcolaborators.map((project) => (
                <Colaborators nombre={project.nombre}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projectcolaborator;
