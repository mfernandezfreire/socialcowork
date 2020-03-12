// auth/auth-service.js
import axios from 'axios';

class UserService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/user`,
      withCredentials: true
    });
  }

 
//READ

showallprojects = () => {
  return this.services.get(`/allprojects`)
  .then(response => response.data)
}

showallprojectsimple = () => {
  return this.service.get(`/allprojectsimple`)
  .then(response => response.data)
}

showprojectsadmin = userid => {
    return this.service.get(`/projectsadmin/${userid}`)
    .then(response => response.data)
}

showprojectscolaborator = userid => {
  return this.service.get(`/projectscolaborator/${userid}`)
  .then(response => response.data)
}

showprojectscompany = userid => {
  return this.service.get(`/projectscompany/${userid}`)
  .then(response => response.data)
}


//UPDATE

deletecolaborator = (projectID, COLABORATORID) => {
  return this.service.put(`/deletecolaborator/${projectID}`,
  { COLABORATORID })
  .then(_=> "Ok" )
}

deletecompany = (projectID, COMPANYID) => {
  return this.service.put(`/deletecompany/${projectID}`,
  { COMPANYID})
  .then(_=> "Ok" )
}


// project = (username, password, rol, nombre, apellidos, email, telefono, perfil_de_linkedin, profesion) => {
//     return this.service.post('/signup', {username, password, rol, nombre, apellidos, email, telefono, perfil_de_linkedin, profesion})
//     .then(response => response.data)
//   }

  
}

export default UserService;