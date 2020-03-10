import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Googlemaps.scss";
import Axios from "axios";

const Marker = ({ text }) => (
  <div>
    <img
      style={{ width: "3vw" }}
      src="https://res.cloudinary.com/dagreomkt/image/upload/v1582904036/folder-name/Nuevo%20Logotipo%20de%20Marca.png.png"
    ></img>
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 40.4378698,
        lng: -3.7240931
      },
      zoom: 10,
      loggedInUser: null,
      id: "",
      allprojects: [],
      projectsnumber: ""
    };
  }

  componentDidMount = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/user/allprojects`).then(
      responseFromApi => {
        this.setState({
          id: "",
          allprojects: responseFromApi.data,
          projectsnumber: responseFromApi.data.length
        });
      }
    );
  };

  render() {
    return (
      <div className="chooseprojects">
          <p>Actualmente estamos desarrollando {this.state.projectsnumber} proyectos en los colectivos de:</p>
            {this.state.allprojects.map(projects => <ul>
                <li>{projects.colectivo}</li>
            </ul>)}
          
        <div style={{ height: "40vh", width: "40%", margin: "2em auto" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBzR-IqTBa-42-yPOEhpmMoy1zGofyObRs"
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            {this.state.allprojects.map(projectposition => (
              <Marker
                lat={projectposition.lat}
                lng={projectposition.lon}
                text="My Marker"
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
