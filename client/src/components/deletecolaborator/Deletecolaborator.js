import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
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
        // const colaborator = this.props.id;
        // console.log(
        //   Axios.put(
        //     `${process.env.REACT_APP_API_URL}/user/deletecolaborator/${this.props.projectid}`,
        //     { colaborator }
        //   )
        // );
        // Axios.put(
        //   `${process.env.REACT_APP_API_URL}/user/deletecolaborator/${this.props.projectid}`,
        //   { colaborator }
        // )
        //   .then(response => {
        //     this.setState({
        //     });
        //     this.props.getUser(response.user);
        //   })
        //   .catch(error => {
        //     this.setState({
        //       succeed: "Has eliminado correctamente al colaborador",
        //       error: true
        //     });
        //   });
      };
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    

    render() {
        return (
            <div class="Edit-colaborators">
                <ul>
                    <li><h3>{this.props.nombre} {this.props.apellidos}</h3></li>
                    <li>Username</li>
                    <li>{this.props.username}</li>
                    <li>Email</li>
                    <li>{this.props.Email}</li>
                    <li>Telefono</li>
                    <li>{this.props.Telefono}</li>
                    <li>Perfil de Linkedin</li>
                    <li>{this.props.perfil_de_linkedin}</li>
                    <li>Profesion</li>
                    <li>{this.props.profesion}</li>
                </ul>  
                <h3>{this.state.error ? `${this.state.succeed}` : `${this.state.succeed}`}</h3>
              <form onSubmit={e => this.handleFormSubmit(e)}>
                <input className="button" type="submit" value="Eliminar Colaborador" />
              </form>
            </div>
        )
    }
}

export default Deletecolaborators;


