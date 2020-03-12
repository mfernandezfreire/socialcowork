// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Allprojects from "../allprojects/Allprojects"
import Axios from "axios";
import Allprojectscompany from "../allprojectscompany/Allprojectscompany";
import UserService from "../../services/UserService";
import "../addcolaborator/Addcolaborator.scss"


class Addcolaborators extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInUser: null ,
      id: "",
      allprojects: [],
      originalAllprojects: []
    };
    this.service = new UserService();
  }

  componentDidMount = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/user/allprojects`)
      .then(responseFromApi => {
        this.setState({
          id: "",
          allprojects: responseFromApi.data,
          originalAllprojects: responseFromApi.data
        })
      })
  }

  search = value => {
    const originalAllprojects = [...this.state.originalAllprojects]
    let newList = []
    console.log(value)
    newList = originalAllprojects.filter(item => {
      // debugger
        const lc = item.profesionales_necesarios.toLowerCase();
        const lt = item.colectivo.toLowerCase();
        const filter = value.toLowerCase();
        // const lc = item.colectivo
        console.log(lc)
        // const filter = value;
        return (lc.includes(filter) || lt.includes(filter))
      })
    
    console.log(newList) 
      this.setState({ allprojects: newList })
    }

  handleChange = e => {
    const { name, value } = e.target;
    this.search(value)
    this.setState({ [name]: value });
  };
  
  render() {
    const filterAllprojects = this.state.allprojects.filter((projects) => projects.id_empresas.includes(this.props.userInSession._id) === false)
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
                        <Allprojectscompany colaborador={this.props.userInSession._id} img={project.image} nombre={project.nombre} fase={project.fase} colectivo={project.colectivo} descripcion_del_proyecto={project.descripcion_del_proyecto} profesionales_necesarios={project.profesionales_necesarios} lugar_de_ejecución={project.lugar_de_ejecucion} _id={project._id}></Allprojectscompany>
                    ))}
          </div>
        </div>
        // <nav class="project_profesional_home">
        //   <h1>Todos los proyectos</h1>
        //   <form>
        //   <input
        //             type="search"
        //             placeholder="Type Search"
        //             value={this.state.search}
        //             name="search"
        //             onChange={e => this.handleChange(e)}
        //         />
        //     {/* <input className="searchbutton" type="submit" value="Busca" /> */}
        //   </form>
        //   <div>
        //   {filterAllprojects.map((project) => (
        //                 <Allprojectscompany colaborador={this.props.userInSession._id} img={project.image} nombre={project.nombre} fase={project.fase} colectivo={project.colectivo} descripcion_del_proyecto={project.descripcion_del_proyecto} profesionales_necesarios={project.profesionales_necesarios} lugar_de_ejecución={project.lugar_de_ejecucion} _id={project._id}></Allprojectscompany>
        //             ))}
        //   </div>
        // </nav>
        
      );
    }
  }

export default Addcolaborators;
