// navbar/Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import axios from "axios"
import Allprojects from "../allprojects/Allprojects"
import Axios from "axios";




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
    this.service = new AuthService();
  }
  

  componentDidMount = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/user/allprojects`)
      .then(responseFromApi => {
        this.setState({
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
        // const lc = item.name.toLowerCase();
        // const filter = value.toLowerCase();
        const lc = item.colectivo
        console.log(lc)
        const filter = value;
        return lc.includes(filter);
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
      return (
        <nav class="project_profesional_home">
          <h1>Todos los proyectos</h1>
          <form>
          <input
                    type="search"
                    placeholder="Type Search"
                    value={this.state.search}
                    name="search"
                    onChange={e => this.handleChange(e)}
                />
            {/* <input className="searchbutton" type="submit" value="Busca" /> */}
          </form>
          <div>
          {this.state.allprojects.map((project) => (
                        <Allprojects colaborador={this.props.userInSession._id} img={project.image} nombre={project.nombre} fase={project.fase} colectivo={project.colectivo} descripcion_del_proyecto={project.descripcion_del_proyecto} profesionales_necesarios={project.profesionales_necesarios} lugar_de_ejecución={project.lugar_de_ejecucion} _id={project._id}></Allprojects>
                    ))}
          </div>
        </nav>
        
      );
    }
  }

export default Addcolaborators;
