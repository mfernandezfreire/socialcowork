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
      <div className="follow-project-page">
       <div className="follow-project-button">
          <button><Link to="/home" className="anchors">Atras</Link></button>
          <h1>Sigue tu proyecto</h1>
        </div>
      <div className="follow-project-pagetitle-bar">
               <img className="svg" src={this.state.projectcolaborator.image}></img>
               <h2>{this.state.projectcolaborator.nombre}</h2>
                </div>
        <div className="follow-project">
        <div className="follow-project-colaborators-block">
          <div className="follow-project-colaborators-blocks">
            <ul className="follow-project-colaborators-project-description">
              <li><h3>Descripción del Proyecto</h3></li>
              <li><h4>Fase del proyecto</h4></li>
              <li><p>{this.state.projectcolaborator.fase}</p></li>
              <li><h4>Colectivo al que atiende</h4></li>
              <li><p>{this.state.projectcolaborator.colectivo}</p></li>
              <li><h4>Descripción del proyecto</h4></li>
              <li><p>{this.state.projectcolaborator.descripcion_del_proyecto}</p></li>
              <li><h4>Lugar de ejecución</h4></li>
              <li><p>{this.state.projectcolaborator.lugar_de_ejecucion}</p></li>
            </ul>
          </div>
          <div class="follow-project-colaborators-description">
            <h3>Colaboradores Asociados al Projecto</h3>
            <div class="follow-project-colaborators-single">
              {this.state.projectcolaborators.map((project) => (
                <Colaborators className="Colaborators" key="project._id" image={project.image} nombre={project.nombre} apellidos={project.apellidos} username={project.username} Email={project.email} Telefono={project.telefono} perfil_de_linkedin={project.perfil_de_linkedin} profesion={project.profesion}/>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Projectcolaborator;
