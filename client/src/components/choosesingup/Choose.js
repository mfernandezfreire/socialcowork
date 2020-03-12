// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import Googlemaps from "../googlemaps/Googlemaps"
import "./Choose.scss";

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
      return (
        <div className="choose">
          <h1>SocialCoWorkers</h1>
          <img src="https://res.cloudinary.com/dagreomkt/image/upload/v1583705984/sociology-social-work2.xd0203a8c_pstdom.jpg"></img>
          <h2>SocialCoWorkers es una web que pretende reunir a todos los actores involucrados en la acción social</h2>
          <p>Los profesionales podrán compartir sus ideas o conocimientos creando una red de coworkers sociales, y las empresas podrán dar el apoyo economico o buscar nuevo capital humano. De esta manera ambos siempre saldran beneficiados</p>
        <h3>Nuestros proyectos en marcha</h3>
        <Googlemaps className="Googlemaps"></Googlemaps>
          <h3>¿Cómo deseas CoWorkear?</h3>
        <div >
          <button ><Link className="anchors" to="/Signup">PROFESIONAL</Link></button>
          <button ><Link className="anchors" to="/Signupcompany">EMPRESA</Link></button>
        </div>
        </div>
      );
    }
  }

export default Choose;
