import React, { Component } from "react";
import { Link } from "react-router-dom";
import Allprojects from "../allprojects/Allprojects"
import UserService from "../../services/UserService";
import Button from "../button/Button";
import "./Addcolaborator.scss"


class Addcolaborators extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInUser: null ,
      id: "",
      allprojects: [],
      originalAllprojects: [],
      search: ""
    };
    this.service = new UserService;
  }

  componentDidMount = () => {
    this.service.showallprojectsimple()
      .then(response => {
        this.setState({
          allprojects: response,
          originalAllprojects: response,
        })
      })
  }

  search = value => {
    const originalAllprojects = [...this.state.originalAllprojects]
    let newList = []
    newList = originalAllprojects.filter(item => {
        const lc = item.profesionales_necesarios.toLowerCase();
        const lt = item.colectivo.toLowerCase();
        const filter = value.toLowerCase();
        return (lc.includes(filter) || lt.includes(filter))
      })
      this.setState({ allprojects: newList })
    }

  handleChange = e => {
    const { name, value } = e.target;
    this.search(value)
    this.setState({ [name]: value });
  };
  
  render() {
    const filterAllprojects = this.state.allprojects.filter((projects) => projects.id_colaboradores.includes(this.props.userInSession._id) === false && projects.id_administrador !== this.props.userInSession._id)
      return (
        <div className="Addcolaborators-page">
        <div className="Button-addcolaborators-page">
          <button><Link to="/home" className="anchors">Atras</Link></button>
          <h1>Todos los proyectos</h1>
        </div>
          <form>
          <input className="searchbar-addcolaborators"
                    type="search"
                    placeholder="Busca por colectivo o profesión"
                    value={this.state.search}
                    name="search"
                    onChange={e => this.handleChange(e)}
                />
          </form>
          <div className="Tiles-addcolaborators-page">
          {filterAllprojects.map((project) => (
                        <Allprojects colaborador={this.props.userInSession._id} img={project.image} nombre={project.nombre} fase={project.fase} colectivo={project.colectivo} descripcion_del_proyecto={project.descripcion_del_proyecto} profesionales_necesarios={project.profesionales_necesarios} lugar_de_ejecución={project.lugar_de_ejecucion} _id={project._id}></Allprojects>
                    ))}
          </div>
        </div>
        
      );
    }
  }

export default Addcolaborators;
