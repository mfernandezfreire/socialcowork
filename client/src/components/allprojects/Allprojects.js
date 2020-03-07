import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Allprojects.css'

class Allprojects extends Component {
  render() {
    return (
      <div className="Allprojects">
        <div>
          <h2>{this.props.nombre}</h2>
          <h3>Fase del proyecto</h3>
          <p>{this.props.fase}</p>
          <h3>Colectivo al que atiende</h3>
          <p>{this.props.colectivo}</p>
          <h3>Descripción del proyecto</h3>
          <p>{this.props.descripcion_del_proyecto}</p>
          <h3>Profesionales profesionales necesarios</h3>
          <p>{this.props.profesionales_necesarios}</p>
          <h3>Lugar de ejecución</h3>
          <p>{this.props.lugar_de_ejecución}</p>
        </div>
        <div>
          <Link to={"/addcolaborator/:id" + this.props._id}>Colabora</Link>
        </div>
      </div>
    );
  }
}

export default Allprojects;