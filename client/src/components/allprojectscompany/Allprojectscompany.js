import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Allprojectscompany.scss";
import Axios from "axios";
import AuthService from "../auth/AuthService";

class Allprojectscompany extends Component {
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
        `${process.env.REACT_APP_API_URL}/user/addcompany/${this.props._id}`,
        { colaborator }
      )
    );
    Axios.put(
      `${process.env.REACT_APP_API_URL}/user/addcompany/${this.props._id}`,
      { colaborator }
    )
      .then(response => {
        this.setState({
          _id: _id,
          succeed: "Ahora sigues el proyecto"
        });
        this.props.getUser(response.user);
      })
      .catch(error => {
        this.setState({
          _id: _id,
          succeed: "Hubo un problema, vuelve a intentarlo",
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
      <div className="Allprojects">
        <div className="Allprojects-characteristics">
          <div className="Allprojects-charateristics-img">
            <img src={this.props.img}></img>
            <ul>
              <li>
                <h2>{this.props.nombre}</h2>
              </li>
              <li>
                <h3>Fase del proyecto</h3>
              </li>
              <li>{this.props.fase}</li>
              <li>
                <h3>Colectivo al que atiende</h3>
              </li>
              <li>{this.props.colectivo}</li>
              <li>
                <h3>Descripción del proyecto</h3>
              </li>
              <li>{this.props.descripcion_del_proyecto}</li>
              <li>
                <h3>Profesionales profesionales necesarios</h3>
              </li>
              <li>{this.props.profesionales_necesarios}</li>
              <li>
                <h3>Lugar de ejecución</h3>
              </li>
              <li>{this.props.lugar_de_ejecución}</li>
            </ul> 
          </div>
        </div>
        <div>
          <h3>{this.state.error ? "Ahora sigues el proyecto" : ""}</h3>
          <form onSubmit={e => this.handleFormSubmit(e)}>
            {/* <input
                type="text"
                name="_id"
                value={this.props._id}
                onChange={e => this.handleChange(e)}
              /> */}
            <input className="button" type="submit" value="Sigue el proyecto" />
          </form>
        </div>
      </div>
    );
  }
}

export default Allprojectscompany;
