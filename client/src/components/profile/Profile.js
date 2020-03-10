import React, { Component } from "react";
import './Profile'
    



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
        return (
            <div class="Colaborators">
                <ul>
                    <li><img src={this.state.profile.image}></img></li>
                    <li><h3>{this.state.profile.nombre} {this.state.profile.apellidos}</h3></li>
                    <li>Username</li>
                    <li>{this.state.profile.username}</li>
                    <li>Email</li>
                    <li>{this.state.profile.email}</li>
                    <li>Telefono</li>
                    <li>{this.state.profile.telefono}</li>
                    <li>Perfil de Linkedin</li>
                    <li>{this.state.profile.perfil_de_linkedin}</li>
                    <li>Profesion</li>
                    <li>{this.state.profile.profesion}</li>
                </ul>  
            </div>
        )
    }
}

export default Profile;