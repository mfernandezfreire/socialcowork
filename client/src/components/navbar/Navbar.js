// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
// import logo from "../../logo-ironhack-blue.png";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.user = []
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    console.log(this.props.userInSession);
    if (this.props.userInSession) {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
          <ul>
            <li>{this.props.userInSession.nombre}</li>
            <li>
              <Link onClick={this.handleLogout}>Logout</Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/Choose">Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
