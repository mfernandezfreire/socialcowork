import React, { Component } from "react";
import AuthService from "../auth/AuthService";
import "./Deletecolaborator.scss"


class Deletecolaborators extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loggedInUser: "",
          allprojects: [],
          succeed: "",
          error: false
        };
        this.service = new AuthService();
      }
    
      handleFormSubmit = event => {
        const colaborator = this.props.id
        event.preventDefault();
        this.props.delete()
      };
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    

    render() {
        return (
            <div class="Colaborators">
            <img src={this.props.image}></img>
                <ul>
                    <li className="Colaborators-image"><h3>{this.props.nombre} {this.props.apellidos}</h3></li>
                    <li><h4>Username</h4></li>
                    <li><p>{this.props.username}</p></li>
                    <li><h4>Email</h4></li>
                    <li><p>{this.props.Email}</p></li>
                    <li><h4>Telefono</h4></li>
                    <li><p>{this.props.Telefono}</p></li>
                    <li><h4>Perfil de Linkedin</h4></li>
                    <li><p>{this.props.perfil_de_linkedin}</p></li>
                    <li><h4>Profesion</h4></li>
                    <li><p>{this.props.profesion}</p></li>
                    <li><form onSubmit={e => this.handleFormSubmit(e)}>
                <input className="button-delete-colaborator" type="submit" value="Eliminar Colaborador" />
              </form></li>
                </ul>  
            </div>
        )
    }
}

export default Deletecolaborators;


