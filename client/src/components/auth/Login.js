// auth/Signup.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService'
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        },()=>{
          this.props.getUser(this.state)
        });

   
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
    <div>
      <h1>Accede a tu area personal</h1>

      <form className="form" onSubmit={this.handleFormSubmit}>
          <label>Nombre de Usuario</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          <label>Contraseña</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          <input className="button" type="submit" value="Login" />
      </form>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>)
  }
}

export default Login;