import React, { Component } from "react";
import './Profile.scss'
    



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loggedInUser: null,
          profile: [],
        };
        // this.service = new AuthService();
      }

      componentDidMount = () => {
        this.setState({
            profile: this.props.userInSession
        }) 
      };

    render() {
        if(this.state.profile.rol === "Profesional"){
        return (
            <div class="Profile">
                <ul>
                    <li><img src={this.state.profile.image}></img></li>
                    <li><h3>{this.state.profile.nombre} {this.state.profile.apellidos}</h3></li>
                    <li><h4>Username</h4></li>
                    <li><p>{this.state.profile.username}</p></li>
                    <li><h4>Email</h4></li>
                    <li><p>{this.state.profile.email}</p></li>
                    <li><h4>Telefono</h4></li>
                    <li><p>{this.state.profile.telefono}</p></li>
                    <li><h4>Perfil de Linkedin</h4></li>
                    <li><p>{this.state.profile.perfil_de_linkedin}</p></li>
                    <li><h4>Profesion</h4></li>
                    <li><p>{this.state.profile.profesion}</p></li>
                    <li><h4>Curriculum Resumido</h4></li>
                    <li><p>{this.state.profile.cv_resumido}</p></li>
                </ul>  
            </div>
        )
    } else {
        return (
            <div class="Profile">
                <ul>
                    <li><img src={this.state.profile.image}></img></li>
                    <li><h3>{this.state.profile.nombre} {this.state.profile.apellidos}</h3></li>
                    <li><h4>Username</h4></li>
                    <li><p>{this.state.profile.username}</p></li>
                    <li><h4>Email</h4></li>
                    <li><p>{this.state.profile.email}</p></li>
                    <li><h4>Telefono</h4></li>
                    <li><p>{this.state.profile.telefono}</p></li>
                    <li><h4>Perfil de Linkedin</h4></li>
                    <li><p>{this.state.profile.perfil_de_linkedin}</p></li>
                </ul>  
            </div>
        )
    }
    }
}

export default Profile;