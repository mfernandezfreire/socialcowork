// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Projectscompany.scss'

class Projectscompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: "",
      id: "",
      succeed: "",
      error: false,
      allprojects: []
    };
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.unfollowproject()
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
          <li><p>{this.props.fase}</p></li>
          <li><h4>Colectivo al que atiende</h4></li>
          <li><p>{this.props.colectivo}</p></li>
          <li><h4>Ubicación del proyecto</h4></li>
          <li><p>{this.props.lugar_de_ejecucion}</p></li>
          <li className="button-colaborator-flex"><button><Link className="anchors" to={"/projectcompanyfollow/" + this.props._id}>VER CAMBIOS</Link></button><form onSubmit={e => this.handleFormSubmit(e)}>
            <input className="button-delete" type="submit" value="DEJAR DE SEGUIR" />
          </form></li>
          
          </ul>
        </div>
      </div>
    );
  }
}

export default Projectscompany;
