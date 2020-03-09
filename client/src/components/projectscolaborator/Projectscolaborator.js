// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../projects/Projects.scss";
import Axios from "axios"
import AuthService from "../auth/AuthService"

class Projectscolaborator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: "",
      id: "",
      succeed: "",
      allprojects: []
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    console.log("entra en el handle");
    event.preventDefault();
    const _id = this.state._id;
    const colaborator = this.props.colaborador;
    console.log(
      Axios.put(
        `${process.env.REACT_APP_API_URL}/user/deletecolaborator/${this.props._id}`,
        { colaborator }
      )
    );
    Axios.put(
      `${process.env.REACT_APP_API_URL}/user/deletecolaborator/${this.props._id}`,
      { colaborator }
    )
      .then(response => {
        this.setState({
          _id: _id,
          succeed: "Has sido añadido como colaborador en este proyecto"
        });
        this.props.getUser(response.user);
      })
      .catch(error => {
        this.setState({
          _id: _id,
          succeed: "Hubo un problema en tu inscripción",
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Projectsadmin">
        <div className="Oneprojectsadmin">
          <img src={this.props.imagen}></img>
          <ul>
          <li><h3>{this.props.nombre}</h3></li>
          <li><h4>Fase del proyecto</h4></li>
          <li>{this.props.fase}</li>
          <li><h4>Colectivo al que atiende</h4></li>
          <li>{this.props.colectivo}</li>
          <li><h4>Ubicación del proyecto</h4></li>
          <li>{this.props.lugar_de_ejecucion}</li>
          <li><button><Link className="anchors" to={"/projectcolaborator/" + this.props._id}>Ver</Link></button></li>
          <li><h4>{this.state.error ? "Ya no colaboras con este proyecto" : ""}</h4></li>
          <form onSubmit={e => this.handleFormSubmit(e)}>
            {/* <input
                type="text"
                name="_id"
                value={this.props._id}
                onChange={e => this.handleChange(e)}
              /> */}
            <input className="button" type="submit" value="Elimina" />
          </form>
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

export default Projectscolaborator;

