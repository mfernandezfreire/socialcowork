import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";


//import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";

//Navbar
import Navbar from "./components/navbar/Navbar";

//Area para todos los usuarios
import Signupcompany from "./components/auth/Signupcompany"
import Choose from "./components/choosesingup/Choose"

//Area privada
import Home from "./components/home/Home";
import Createproject from "./components/createproject/Createproject";
import Addcolaborator from "./components/addcolaborator/Addcolaborator"
import Projectcolaborator from "./components/projectcolaborator/Projectcolaborator"
import Projectedit from "./components/projectedit/Projectedit";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = { loggedInUser: null };
    this.service = new AuthService();

    this.fetchUser()
  }

  getUser = userObj => {
    this.fetchUser()
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }

  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <div className="App">
          <Redirect to="/home" />
          <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          <Switch>
            <Route exact path="/home" render={() => <Home userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/createproject/:id" render={() => <Createproject userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/allprojects" render={() => <Addcolaborator userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/projectcolaborator/:id" render={(props) => <Projectcolaborator userInSession={this.state.loggedInUser} getUser={this.getUser} {...props}/>} />
            <Route exact path="/createaproject" render={() => <Createproject userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/projectedit/:id" render={(props) => <Projectedit userInSession={this.state.loggedInUser} getUser={this.getUser} {...props}/>} />
          </Switch>
        </div>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <div className="App">
          <Redirect to="/Choose" />
          <header>
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <Switch>
            <Route exact path="/choose" render={() => <Choose getUser={this.getUser} />} />
            <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
            <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
            <Route exact path="/signupCompany" render={() => <Signupcompany getUser={this.getUser} />} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
