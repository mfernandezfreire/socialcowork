import React, { Component } from "react";
import AuthService from "../auth/AuthService";
import Axios from "axios"
import "./Projectedit.scss"

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Projectedit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      fase: "", 
      colectivo: "", 
      descripcion_del_proyecto:"", 
      profesionales_necesarios: [],
      lugar_de_ejecucion: "",
      id_administrador: "",
      id_colaboradores: [],
      image: "",
      projectsadmin: []
    };
    this.service = new AuthService();
  }

  componentDidMount = () => {
    Axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/projectsadmin/${this.props.match.params.id}`
      )
      .then(responseFromApi => {
        this.setState({
          projectsadmin: responseFromApi.data
        });
      });
  };

  handleFormSubmit = event => {
    debugger
    event.preventDefault();
    const nombre = this.state.nombre;
    const fase = this.state.fase
    const colectivo = this.state.colectivo;
    const descripcion_del_proyecto = this.state.descripcion_del_proyecto;
    const profesionales_necesarios = this.state.profesionales_necesarios;
    const lugar_de_ejecucion = this.state.lugar_de_ejecucion;
    const id_administrador = this.props.userInSession._id;
    const id_colaboradores = this.state.id_colaboradores;
    const image = this.state.image
    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    Axios.post(`${process.env.REACT_APP_API_URL}/user//projectedit/:id`, {nombre, fase, colectivo, descripcion_del_proyecto, profesionales_necesarios, lugar_de_ejecucion, id_administrador, id_colaboradores, image}).then(_=> {
        this.setState({
          nombre: "",
          fase: "",
          colectivo: "",
          descripcion_del_proyecto: "",
          profesionales_necesarios: "",
          lugar_de_ejecucion: "",
          id_administrador: "",
          id_colaboradores: [],
          image: "",
        });
      })
      .catch(error => {
        this.setState({
          nombre: nombre,
          fase: fase,
          colectivo: colectivo,
          descripcion_del_proyecto: descripcion_del_proyecto,
          profesionales_necesarios: profesionales_necesarios,
          lugar_de_ejecucion: lugar_de_ejecucion,
          id_administrador: id_administrador,
          id_colaboradores: id_colaboradores,
          image: "",
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
      <div className="Projectedit">
        <form onSubmit={this.handleFormSubmit}>
            <label>Nombre del proyecto</label>
            <input
              type="text"
              name="nombre"
              value={this.state.nombre}
              onChange={e => this.handleChange(e)}
            />
            <label>Fase del proyecto</label>
            <select
              name="fase"
              value={this.state.fase}
              onChange={e => this.handleChange(e)}
            >
              <option value="Elaboración del diseño" selected>Elaboración del diseño</option>
              <option value="Busqueda de Recursos">Busqueda de recursos</option>/option>
              <option value="Fases Iniciales del proyecto">Fases Iniciales del proyecto</option>
            </select>
            <label>Colectivo al que atiende</label>
            <select
              name="colectivo"
              value={this.state.colectivo}
              onChange={e => this.handleChange(e)}
            >
              <option value="Violencia de Genero" selected>Violencia de Género</option>
              <option value="Diversidad Funcional">Diversidad Funcional</option>/option>
              <option value="En Riesgo de Exclusión Social">En riesgo de exclusión social</option>
              <option value="Mayores">Mayores</option>
              <option value="Menores">Menores</option>
              <option value="Población Inmigrante">Población Inmigrante</option>
              <option value="Otros">Otros</option>
            </select>
            <br/>
            <label>Descripción del proyecto</label>
            <input
              type="text"
              name="descripcion_del_proyecto"
              value={this.state.descripcion_del_proyecto}
              onChange={e => this.handleChange(e)}
            />
            <label>Profesionales Necesarios</label>
            <input
              type="text"
              name="profesionales_necesarios"
              value={this.state.profesionales_necesarios}
              onChange={e => this.handleChange(e)}
            />
            <label>Lugar de Ejecución</label>
            <input
              type="text"
              name="lugar_de_ejecucion"
              value={this.state.lugar_de_ejecucion}
              onChange={e => this.handleChange(e)}
            />
            <label>Administrador</label>
            <input
              type="text"
              name="id_administrador"
              value={this.props.userInSession._id}
              onChange={e => this.handleChange(e)}
            />
        <input type="submit" value="Sign up" />
        </form>

        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
  }
}

export default Projectedit;

