import React, { Component } from "react";
import "../colaborators/Colaborators.scss"


class Company extends Component {

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
                </ul>  
            </div>
        )
    }
}

export default Company;