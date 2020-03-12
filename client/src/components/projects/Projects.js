// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Projects.scss'

class Projects extends Component {
  render() {
    return (
      <div className="Projectsadmin">
        <div className="Oneprojectsadmin">
          <img src={this.props.imagen}></img>
          <ul>
          <li><h3>{this.props.nombre}</h3></li>
          <li><h4>Fase del proyecto</h4></li>
          <li><p>{this.props.fase}</p></li>
          <li><h4>Colectivo al que atiende</h4></li>
          <li><p>{this.props.colectivo}</p></li>
          <li><h4>Ubicación del proyecto</h4></li>
          <li><p>{this.props.lugar_de_ejecucion}</p></li>
          <li id="button-projects"><button><Link className="anchors"  to={"/projectedit/" + this.props._id}>GESTIONA TU PROYECTO</Link></button></li>
          {/* <li><h4>Descripción del proyecto</h4></li>
          <li>{this.props.descripcion_del_proyecto}</li>
          <li>Profesionales profesionales necesarios</li>
          <li>{this.props.profesionales_necesarios}</li>
          <li>Lugar de ejecución</li>
          <li>{this.props.lugar_de_ejecución}</li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
