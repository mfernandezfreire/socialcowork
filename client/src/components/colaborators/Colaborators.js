import React, { Component } from "react";


class Colaborators extends Component {

    render() {
        return (
            <div class="Colaborators">
                <ul>
                    <li><h3>{this.props.nombre}</h3></li>
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
            </div>
        )
    }
}

export default Colaborators;