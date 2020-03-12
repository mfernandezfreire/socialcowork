import React, { Component } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";


import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";


import Navbar from "./components/navbar/Navbar";

import Signupcompany from "./components/auth/Signupcompany"
import Choose from "./components/choosesingup/Choose"

import Home from "./components/home/Home";
import Createproject from "./components/createproject/Createproject";
import Addcolaborator from "./components/addcolaborator/Addcolaborator"
import Projectcolaborator from "./components/projectcolaborator/Projectcolaborator"
import Projectedit from "./components/projectedit/Projectedit";
import Addcompany from "./components/addcompany/Addcompany"
import Profile from "./components/profile/Profile"
import ProjectCompanyFollow from "./components/projectcompanyfollow/ProjectCompanyFollow"

class App extends Component {
  constructor(props) {
    super(props);
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
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Redirect to="/home" />
          <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          <Switch>
            <Route exact path="/home" render={() => <Home userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/createproject/:id" render={() => <Createproject userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/profile" render={() => <Profile userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/allprojects" render={() => <Addcolaborator userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/allprojectscompany" render={() => <Addcompany userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/projectcolaborator/:id" render={(props) => <Projectcolaborator userInSession={this.state.loggedInUser} getUser={this.getUser} {...props}/>} />
            <Route exact path="/createaproject" render={() => <Createproject userInSession={this.state.loggedInUser} getUser={this.getUser} />} />
            <Route exact path="/projectedit/:id" render={(props) => <Projectedit userInSession={this.state.loggedInUser} getUser={this.getUser} {...props}/>} />
            <Route exact path="/projectcompanyfollow/:id" render={(props) => <ProjectCompanyFollow userInSession={this.state.loggedInUser} getUser={this.getUser} {...props}/>} />
          </Switch>
        </div>
      );
    } else {
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
