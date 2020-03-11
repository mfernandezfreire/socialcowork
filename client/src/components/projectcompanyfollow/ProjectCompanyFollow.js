import React, { Component } from "react";
import AuthService from "../auth/AuthService";
import Axios from "axios"
import Deletecolaborator from "../deletecolaborator/Deletecolaborator"
import "./ProjectCompanyFollow.scss"
import Colaborators from "../colaborators/Colaborators"

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Projectedit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsadmin: [],
      projectscolaborator: []
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
          projectscolaborator: responseFromApi.data.id_colaboradores
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
 

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state.projectsadmin)
    console.log(this.state.projectscolaborator.length)
    return (
      <div className="Projectedit">
      <div className="Projectedit-block-company">
        <ul>
          <li><img src={this.state.projectsadmin.image}></img></li>
          <li>{this.state.projectsadmin.nombre}</li>
          <li>{this.state.projectsadmin.fase}</li>
          <li>{this.state.projectsadmin.colectivo}</li>
          <li>{this.state.projectsadmin.descripcion_del_proyecto}</li>
          <li>{this.state.projectsadmin.profesionales_necesarios}</li>
          <li>{this.state.projectsadmin.lugar_de_ejecución}</li>
        </ul>
        </div>
        <div className="Projectedit-block-company">
        {this.state.projectscolaborator.map((project) => (
                <Colaborators key="project._id" nombre={project.nombre} apellidos={project.apellidos} username={project.username} Email={project.email} Telefono={project.telefono} perfil_de_linkedin={project.perfil_de_linkedin} profesion={project.perfil_de_linkedin}/>))}
      </div>
    </div>
    );
  }
}

export default Projectedit;

