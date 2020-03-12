import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Button.scss'
    

class Button extends Component {
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
            <div class="Button">
               <button><Link to="/home" className="anchors">Atras</Link></button>
            </div>
        )
    }
}

export default Button;