// auth/auth-service.js
import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    });
  }

  signup = (username, password, rol, nombre, apellidos, email, telefono, perfil_de_linkedin, profesion) => {
    return this.service.post('/signup', {username, password, rol, nombre, apellidos, email, telefono, perfil_de_linkedin, profesion})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }
}

export default AuthService;