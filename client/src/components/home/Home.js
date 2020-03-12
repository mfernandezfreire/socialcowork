import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService"
import Projects from "../projects/Projects";
import Projectscolaborator from "../projectscolaborator/Projectscolaborator";
import Projectscompany from "../projectscompany/Projectscompany"
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      projectsadmin: [],
      projectscolaborator: [],
      projectscompany: []
    };
    this.service = new UserService();
  }


  componentDidMount = () => {
    this.fetchAllInfo()
  };

  fetchAllInfo(){

    this.service.showprojectsadmin(this.props.userInSession._id)
    .then( response => {
      console.log(response)
      this.setState({
        projectsadmin: response
      });
    });

    this.service.showprojectscolaborator(this.props.userInSession._id)
    .then(response => {
      this.setState({
        projectscolaborator: response
      });
    });

  this.service.showprojectscompany(this.props.userInSession._id)
    .then(response => {
      this.setState({
        projectscompany: response
      });
    });
  }

deleteProject(projectID, COLABORATORID){
    this.service.deletecolaborator(projectID, COLABORATORID)
      .then(_=> {
        this.fetchAllInfo()
      })
      .catch(_=> {
        this.setState({
          error: true
        });
      });
  }

unfollowproject(projectID, COMPANYID){
    this.service.deletecompany(projectID, COMPANYID)
      .then(_=> {
        this.fetchAllInfo()
      })
      .catch(_=> {
        this.setState({
          error: true
        });
      });
  }

  render() {
  
    if (this.props.userInSession.rol === "Profesional") {
      return (
        <div className="project_profesional_home">
          <div className="project_profesional">
            <div className="project_profesional_blocks">
             <div className="title-bar">
                <img className="svg" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583743040/project-management_lr6ikp.svg"></img><h2>Tus Proyectos como Administrador</h2>
             </div>
                <div class="projects_profesional_block">
                <button><Link className="anchors" to="/createaproject">CREA UN PROYECTO</Link></button>
                  {this.state.projectsadmin.map(project => (
                    <Projects
                      imagen={project.image}
                      nombre={project.nombre}
                      fase={project.fase}
                      colectivo={project.colectivo}
                      lugar_de_ejecucion={project.lugar_de_ejecucion}
                      _id={project._id}
                    ></Projects>
                  ))}
                </div>
            </div>
            <div class="project_profesional_blocks">
              <div className="title-bar">
               <img className="svg" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583743047/team_llfin5.svg"></img><h2>Proyectos como Colaborador</h2>
                </div>
                  <button><Link className="anchors" to="/allprojects">COLABORA</Link></button>
                <div class="projects_profesional_block">
                  {this.state.projectscolaborator.map(project => (
                    <Projectscolaborator
                      colaborador={this.props.userInSession._id}
                      imagen={project.image}
                      nombre={project.nombre}
                      fase={project.fase}
                      colectivo={project.colectivo}
                      lugar_de_ejecucion={project.lugar_de_ejecucion}
                      _id={project._id}
                      delete={()=>this.deleteProject(project._id, this.props.userInSession._id)}
                    ></Projectscolaborator>
                  ))}
                </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="project_profesional_home">
          <div class="project_profesional">
            <div class="project_profesional_blocks">
            <div className="title-bar">
                <img className="svg" src="https://res.cloudinary.com/dagreomkt/image/upload/v1583782165/crm_yzgdd0.svg"></img><h2>Proyectos que sigues</h2>
                </div>
                <button><Link className="anchors" to="/allprojectscompany">BUSCA MÁS PROYECTOS</Link></button>
                <div class="projects_profesional_block">
                  {this.state.projectscompany.map(project => (
                    <Projectscompany
                      imagen={project.image}
                      nombre={project.nombre}
                      fase={project.fase}
                      colectivo={project.colectivo}
                      lugar_de_ejecucion={project.lugar_de_ejecucion}
                      _id={project._id}
                      unfollowproject={()=>this.unfollowproject(project._id, this.props.userInSession._id)}
                    ></Projectscompany>
                  ))}
                </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Home;
