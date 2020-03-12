import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import AuthService from "../auth/AuthService";
import Axios from "axios"
import "../projectcolaborator/Projectcolaborator.scss"
import Deletecolaborators from "../deletecolaborator/Deletecolaborator";
import Company from "../Company/Company"

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
      projectsadmin: [],
      projectscolaborator: [],
      projectscompany: []
    };
    this.service = new AuthService();
  }

  componentDidMount = () => {
    this.fecthAllinfo()
  };

fecthAllinfo() {
  Axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/projectadmin/${this.props.match.params.id}`
      )
      .then(responseFromApi => {
        this.setState({
          projectsadmin: responseFromApi.data,
          projectscolaborator: responseFromApi.data.id_colaboradores,
          projectscompany: responseFromApi.data.id_empresas
        });
      });
}

deleteProject(COLABORATORID) {
        Axios.put(
          `${process.env.REACT_APP_API_URL}/user/deletecolaborator/${this.props.match.params.id}`,
          { COLABORATORID }
        )
          .then(response => {
            this.fecthAllinfo()
          })
          .catch(error => {
            this.setState({
              error: true
            });
          });
}
 

  handleFormSubmit = event => {
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
    Axios.put(`${process.env.REACT_APP_API_URL}/user/projectedit/:id`, {nombre, fase, colectivo, descripcion_del_proyecto, profesionales_necesarios, lugar_de_ejecucion, id_administrador, id_colaboradores, image}).then(_=> {
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
      <div className="follow-project-page">
       <div className="follow-project-button">
          <button><Link to="/home" className="anchors">Atras</Link></button>
          <h1>Gestiona Tu Proyecto</h1>
        </div>
      <div className="follow-project-pagetitle-bar">
               <img className="svg" src={this.state.projectsadmin.image}></img>
               <h2>{this.state.projectsadmin.nombre}</h2>
                </div>
        <div className="follow-project">
        <div className="follow-project-colaborators-block">
          <div className="follow-project-colaborators-blocks">
            <ul className="follow-project-colaborators-project-description">
              <li><h3>Descripción del Proyecto</h3></li>
              <li><h4>Fase del proyecto</h4></li>
              <li><p>{this.state.projectsadmin.fase}</p></li>
              <li><h4>Colectivo al que atiende</h4></li>
              <li><p>{this.state.projectsadmin.colectivo}</p></li>
              <li><h4>Descripción del proyecto</h4></li>
              <li><p>{this.state.projectsadmin.descripcion_del_proyecto}</p></li>
              <li><h4>Lugar de ejecución</h4></li>
              <li><p>{this.state.projectsadmin.lugar_de_ejecucion}</p></li>
            </ul>
          </div>
          <div class="follow-project-colaborators-description">
            <h2>Colaboradores Asociados al Projecto</h2>
            <div class="follow-project-colaborators-single">
              {this.state.projectscolaborator.map((project) => (
                <Deletecolaborators className="Colaborators" delete={()=>this.deleteProject(project._id)} key="project._id" image={project.image} nombre={project.nombre} apellidos={project.apellidos} username={project.username} Email={project.email} Telefono={project.telefono} perfil_de_linkedin={project.perfil_de_linkedin} profesion={project.profesion}/>
              ))}
            </div>
          </div>
          <div class="follow-project-colaborators-description">
            <h2>Empresas que siguen tu proyecto</h2>
            <div class="follow-project-colaborators-single">
              {this.state.projectscompany.map((project) => (
                <Company className="Colaborators" delete={()=>this.deleteProject(project._id)} key="project._id" image={project.image} nombre={project.nombre} apellidos={project.apellidos} username={project.username} Email={project.email} Telefono={project.telefono} perfil_de_linkedin={project.perfil_de_linkedin} profesion={project.profesion}/>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      // <div className="Projectedit">
      // <div className="Projectedit-block">
      //    <ul>
      //    <li>Nombre del proyecto</li>
      //      <li>{this.state.projectsadmin.nombre}</li>
      //      <li>Fase de desarrollo</li>
      //      <li>{this.state.projectsadmin.fase}</li>
      //      <li>Colectivo al que atiende</li>
      //      <li>{this.state.projectsadmin.colectivo}</li>
      //      <li>Descripción del proyecto</li>
      //      <li>{this.state.projectsadmin.descripcion_del_proyecto}</li>
      //      <li>Profesionales Necesarios</li>
      //      <li>{this.state.projectsadmin.profesionales_necesarios}</li>
      //      <li>Lugar donde se desarrolla el proyecto</li>
      //      <li>{this.state.projectsadmin.lugar_de_ejecucion}</li>
      //    </ul>
      //   </div>
      //   <div className="Projectedit-block">
      //     {this.state.projectscolaborator.map((project) => ( <Deletecolaborator delete={()=>this.deleteProject(project._id)} projectid={this.props.match.params.id} image={project.image} id={project._id} username={project.username} Email={project.email} Telefono={project.telefono} perfil_de_linkedin={project.perfil_de_linkedin} profesion={project.profesion}></Deletecolaborator>))}
      //   </div>
      //   <div className="Projectedit-block">
      //     {this.state.projectscompany.map((project) => (   <Colaborator key="project._id" image={project.image} nombre={project.nombre} apellidos={project.apellidos} username={project.username} Email={project.email} Telefono={project.telefono} perfil_de_linkedin={project.perfil_de_linkedin} profesion={project.perfil_de_linkedin}/>))}
      //   </div>
      // </div>
    );
  }
}

export default Projectedit;

