// auth/auth-service.js
import axios from 'axios';

class UserService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/user`,
      withCredentials: true
    });
  }

projectsadmin = (userid) => {
    return this.service.get(`/projectsadmin/'${userid}'`)
    .then(response => response.data)
}

// project = (username, password, rol, nombre, apellidos, email, telefono, perfil_de_linkedin, profesion) => {
//     return this.service.post('/signup', {username, password, rol, nombre, apellidos, email, telefono, perfil_de_linkedin, profesion})
//     .then(response => response.data)
//   }

  
}

export default UserService;