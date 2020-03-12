// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import "./Navbar.scss";


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
    if (this.props.userInSession) {
      return (        
        <nav className="nav-style">
          <ul>
            <li>
              <Link to="/home"><img class="logo" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583685226/SocialCoWorker/Nuevo_Logotipo_de_Marca_aothgs.png"></img></Link>
            </li>
          </ul>
          <ul>
            <li><img class="profile-photo" src={this.props.userInSession.image}></img></li>
            <li><button><Link to="/profile" className="anchors">PERFIL</Link></button></li>
            <li>
              <button><Link className="anchors" onClick={this.handleLogout}>LOGOUT</Link></button>
            </li>
          </ul>
        </nav>

      );
    } else {
      return (
          <nav className="nav-style">
            <ul>
              <li>
              <Link to="/Choose"><img class="logo" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583685226/SocialCoWorker/Nuevo_Logotipo_de_Marca_aothgs.png" alt="logotipo"></img></Link>
              </li>
            </ul>
            <ul>
              <li>
                <button><Link to="/Login" className="anchors">LOGIN</Link></button>
              </li>
            </ul>
          </nav>
      );
    }
  }
}

export default Navbar;
