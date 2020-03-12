import React, { Component } from "react";
import AuthService from "../auth/AuthService";
import Axios from "axios"
import "./Createproject.scss"

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {nombre: "", fase: "", colectivo: "", descripcion_del_proyecto:"", profesionales_necesarios: [], lugar_de_ejecucion: "", id_administrador: "", id_colaboradores: [], image: ""};
    this.service = new AuthService();
  }
// Pendiente de subsanar errores de Cloundinary
//   handleFileUpload = e => {
//     const uploadData = new FormData()
//     uploadData.append("image", e.target.files[0])
//     Axios.post(`${process.env.REACT_APP_API_URL}/user/upload`, uploadData)
//         .then(response => {
//             console.log('Subida de archivo finalizada! La URL de Cloudinary es: ', response.secure_url);
//             this.setState({
//                 image: response.secure_url 
//             })
//         })
//         .catch(err => console.log(err))
// }


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
    const image = "https://res.cloudinary.com/dagreomkt/image/upload/v1582904036/folder-name/Nuevo%20Logotipo%20de%20Marca.png.png"
    // const image = "https://res.cloudinary.com/dagreomkt/image/upload/v1582904036/folder-name/Nuevo%20Logotipo%20de%20Marca.png.png"
// console.log( Axios.post(`${process.env.REACT_APP_API_URL}/user/createproject`, {nombre, fase, colectivo, descripcion_del_proyecto, profesionales_necesarios, lugar_de_ejecucion, id_administrador, id_colaboradores, image}))    
Axios.post(`${process.env.REACT_APP_API_URL}/user/createproject`, {nombre, fase, colectivo, descripcion_del_proyecto, profesionales_necesarios, lugar_de_ejecucion, id_administrador, id_colaboradores, image}).then(_=> {
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
      <div className="Createproject">
        <h1>Crea tu propio proyecto</h1>
        <form className="form-flex" onSubmit={this.handleFormSubmit}>
          <div className="form-create">
            <label>Nombre del proyecto</label>
            <input
              className="create-input"
              type="text"
              name="nombre"
              value={this.state.nombre}
              onChange={e => this.handleChange(e)}
            />
            <label>Fase del proyecto</label>
            <select
              className="create-input"
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
               className="create-input"
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
            <label>Profesionales Necesarios</label>
            <input
            className="create-input"
              type="text"
              name="profesionales_necesarios"
              value={this.state.profesionales_necesarios}
              onChange={e => this.handleChange(e)}
            />
            <label>Lugar de Ejecución</label>
            <input
              className="create-input"
              type="text"
              name="lugar_de_ejecucion"
              value={this.state.lugar_de_ejecucion}
              onChange={e => this.handleChange(e)}
            />
            {/* <label>Imagen</label>
            <input
              type="file"
              name="image"
              onChange={this.handleFileUpload}
              ></input> */}
            </div>
            <div className="form-create">
            <label>Descripción del proyecto</label>
            <textarea
              className="description"
              type="text"
              name="descripcion_del_proyecto"
              value={this.state.descripcion_del_proyecto}
              size="400"
              onChange={e => this.handleChange(e)}
            />
            {/* <label>Administrador</label>
            <input
              type="text"
              name="id_administrador"
              value={this.props.userInSession._id}
              onChange={e => this.handleChange(e)}
            /> */}
            <input className="button-form" type="submit" value="CREAR UN PROYECTO" />
            </div>
            <div>

            </div>
        </form>
        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
  }
}

export default Signup;

