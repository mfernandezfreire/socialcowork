// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
// import logo from "../../logo-ironhack-blue.png";
import "./Choose.css";

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
        <nav>
          <h1>¡¡Hola!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel architecto ex, corrupti magnam consectetur eum qui optio repellat recusandae explicabo aliquam omnis? Non nulla quas tempore sit, eius exercitationem modi?</p>
          <button><Link to="/Signup">Profesional</Link></button>
          <button><Link to="/Signupcompany">Empresa</Link></button>
        </nav>
      );
    }
  }

export default Choose;
