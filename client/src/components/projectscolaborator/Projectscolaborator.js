// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projectscolaborator.css";

class Projectscolaborator extends Component {
  render() {
    return (
      <div className="Projectscolaborator">
        <div className="Projectscolaborator-single">
          <div>
            <h2>{this.props.nombre}</h2>
            <h3>Fase del proyecto</h3>
            <p>{this.props.fase}</p>
            <h3>Colectivo al que atiende</h3>
            <p>{this.props.colectivo}</p>
            <h3>Profesionales profesionales necesarios</h3>
            <p>{this.props.profesionales_necesarios}</p>
            <h3>Lugar de ejecución</h3>
            <p>{this.props.lugar_de_ejecución}</p>
          </div>
          <div>
            <Link to={"/projectcolaborator/" + this.props._id}>Ver</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Projectscolaborator;
