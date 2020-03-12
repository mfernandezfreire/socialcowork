import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Allprojects.scss";
import Axios from "axios";
import AuthService from "../auth/AuthService";

class Allprojects extends Component {
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
        `${process.env.REACT_APP_API_URL}/user/addcolaborator/${this.props._id}`,
        { colaborator }
      )
    );
    Axios.put(
      `${process.env.REACT_APP_API_URL}/user/addcolaborator/${this.props._id}`,
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
      <div className="Allprojects-colaborators">
        <div className="Allprojects-characteristics">
          <div className="Allprojects-charateristics-img">
            <img class="addcolaborator-img" src={this.props.img}></img>
            <ul>
              <li>
                <h2>{this.props.nombre}</h2>
              </li>
              <li>
                <h3>Fase del proyecto</h3>
              </li>
              <li><p>{this.props.fase}</p></li>
              <li>
                <h3>Colectivo al que atiende</h3>
              </li>
              <li><p>{this.props.colectivo}</p></li>
              <li>
                <h3>Descripción del proyecto</h3>
              </li>
              <li><p>{this.props.descripcion_del_proyecto}</p></li>
              <li>
                <h3>Profesionales profesionales necesarios</h3>
              </li>
              <li><p>{this.props.profesionales_necesarios}</p></li>
              <li>
                <h3>Lugar de ejecución</h3>
              </li>
              <li><p>{this.props.lugar_de_ejecución}</p></li>
              <li><h3 className="alert" >{this.state.error ? "Has sido añadido correctamente al proyecto" : ""}</h3>
                <form  onSubmit={e => this.handleFormSubmit(e)}>
                  {/* <input
                      type="text"
                      name="_id"
                      value={this.props._id}
                      onChange={e => this.handleChange(e)}
                    /> */}
                  <input className="button-follow" type="submit" value="Colabora" />
                </form></li>
                </ul> 
          </div>
        </div>
      </div>
    );
  }
}

export default Allprojects;
