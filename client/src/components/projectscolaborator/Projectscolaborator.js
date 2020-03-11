// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../projects/Projects.scss";
import AuthService from "../auth/AuthService"

class Projectscolaborator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: "",
      id: "",
      succeed: "",
      error: false,
      allprojects: []
    };
    this.service = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.delete()
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state.error)
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
          <form onSubmit={e => this.handleFormSubmit(e)}>
            <input className="button" type="submit" value="Elimina" />
          </form>
          </ul>
        </div>
      </div>
    );
  }
}

export default Projectscolaborator;

