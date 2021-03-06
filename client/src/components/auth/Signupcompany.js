// auth/Signup.js
import React, { Component } from "react";
import AuthService from "./AuthService";



//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "",rol: "", nombre:"", telefono:"", email: "", perfil_de_linkedin: ""};
    this.service = new AuthService();
  }


  handleFormSubmit = event => {
    debugger
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const rol = "Empresa";
    const nombre = this.state.nombre;
    const email = this.state.email;
    const telefono = this.state.telefono;
    const perfil_de_linkedin = this.state.perfil_de_linkedin
    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service
      .signup(username, password, rol, nombre, email, telefono, perfil_de_linkedin)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          rol: "",
          nombre: "",
          apellidos: "",
          email: "",
          telefono: "",
          perfil_de_linkedin: "",
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        this.props.getUser(response.user);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          nombre: nombre,
          rol: "Profesional",
          email: email,
          telefono: telefono,
          perfil_de_linkedin: perfil_de_linkedin,
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
      <div>
        <h1>Busca Ideas o Candidatos</h1>

        <form className="form" onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <label>Nombre</label>
            <input
              type="nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={e => this.handleChange(e)}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
            <label>Telefono</label>
            <input
              type="telefono"
              name="telefono"
              value={this.state.telefono}
              onChange={e => this.handleChange(e)}
            />
            <label>Perfil de linkedin</label>
            <input
              type="perfil_de_linkedin"
              name="perfil_de_linkedin"
              value={this.state.perfil_de_linkedin}
              onChange={e => this.handleChange(e)}
            />
          <input className="button" type="submit" value="Sign up" />
        </form>

        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
  }
}

export default Signup;
