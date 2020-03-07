// import React, { Component } from "react";
// import AuthService from "./AuthService";

// const userSchema = new Schema({
//     nombre: String,
//     fase: {
//         type: String,
//         enum: ["Elaboración del diseño", "Busqueda de Recursos", "Fases Iniciales del proyecto"]
//     },
//     colectivo: {
//         type: String,
//         enum: ["Violencia de Genero", "Diversidad Funcional",
//             "En Riesgo de Exclusión Social", "Mayores", "Menores", "Población Inmigrante", "Otros"
//         ]
//     },
//     descripcion_del_proyecto: String,
//     id_administradorales_necesarios: [{
//         type: String
//     }],
//     lugar_de_ejecucion: {
//         type: String
//     },
//     id_administrador: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }],
//     id_colaboradores: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }],
//     image: String
// }, {
//     timestamps: {
//         createdAt: 'created_at',
//         updatedAt: 'updated_at'
//     }
// });

// //signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
// //uno llama a /signup y el otro a /login usando nuestro AuthService
// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {nombre: "", fase: [], colectivo: [], descripcion_del_proyecto:"", id_administrador:[], lugar_de_ejecucion: "", id_administrador: "", id_colaboradores: [], image: ""};
//     this.service = new AuthService();
//   }


//   handleFormSubmit = event => {
//     debugger
//     event.preventDefault();
//     const nombre = this.state.nombre;
//     const fase = this.state.fase
//     const colectivo = this.state.colectivo;
//     const descripcion_del_proyecto = this.state.descripcion_del_proyecto;
//     const id_administrador = this.state.id_administradorales_necesarios;
//     const lugar_de_ejecucion = this.state.lugar_de_ejecucion
//     const id_administrador = this.state.id_administrador
//     //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
//     this.service
//       .signup(nombre, fase, colectivo, descripcion_del_proyecto, id_administradorales_necesarios, lugar_de_ejecucion, id_administrador)
//       .then(response => {
//         this.setState({
//           nombre: "",
//           fase: "",
//           colectivo: "",
//           descripcion_del_proyecto: "",
//           id_administradorales_necesarios: "",
//           lugar_de_ejecucion: "",
//           id_administrador: ""

//         });
//         //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
//         //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
//         //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
//         this.props.getUser(response.user);
//       })
//       .catch(error => {
//         this.setState({
//           nombre: nombre,
//           fase: fase,
//           colectivo: colectivo,
//           descripcion_del_proyecto: descripcion_del_proyecto,
//           id_administradorales_necesarios: id_administradorales_necesarios,
//           lugar_de_ejecucion: lugar_de_ejecucion,
//           id_administrador: "",
//           error: true
//         });
//       });
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Crea un proyecto o colabora, este es el comienzo</h3>

//         <form onSubmit={this.handleFormSubmit}>
//           <fieldset>
//             <label>nombre:</label>
//             <input
//               type="text"
//               name="nombre"
//               value={this.state.nombre}
//               onChange={e => this.handleChange(e)}
//             />
//           </fieldset>

//           <fieldset>
//             <label>fase:</label>
//             <input
//               type="fase"
//               name="fase"
//               value={this.state.fase}
//               onChange={e => this.handleChange(e)}
//             />
//           </fieldset>

//           <fieldset>
//             <label>Nombre</label>
//             <input
//               type="nombre"
//               name="nombre"
//               value={this.state.nombre}
//               onChange={e => this.handleChange(e)}
//             />
//           </fieldset>

//           <fieldset>
//             <label>colectivo</label>
//             <input
//               type="colectivo"
//               name="colectivo"
//               value={this.state.colectivo}
//               onChange={e => this.handleChange(e)}
//             />
//           </fieldset>

//           <fieldset>
//             <label>descripcion_del_proyecto</label>
//             <input
//               type="descripcion_del_proyecto"
//               name="descripcion_del_proyecto"
//               value={this.state.descripcion_del_proyecto}
//               onChange={e => this.handleChange(e)}
//             />
//           </fieldset>

//           <fieldset>
//             <label>id_administradorales_necesarios</label>
//             <input
//               type="id_administradorales_necesarios"
//               name="id_administradorales_necesarios"
//               value={this.state.id_administradorales_necesarios}
//               onChange={e => this.handleChange(e)}
//             />
//           </fieldset>

//           <fieldset>
//             <label>Perfil de linkedin</label>
//             <input
//               type="lugar_de_ejecucion"
//               name="lugar_de_ejecucion"
//               value={this.state.lugar_de_ejecucion}
//               onChange={e => this.handleChange(e)}
//             />
//           </fieldset>
//           <fieldset>
//             <label>id_administrador</label>
//             <select
//               name="id_administrador"
//               value={this.state.id_administrador}
//               onChange={e => this.handleChange(e)}
//             >
//               <option value="Abogado" selected>Abogado</option>
//               <option value="Antropólogo/a">Antropólogo/a</option>
//               <option value="Educador/a Social">Educador/a Social</option>
//               <option value="Integrador/a Social">Integrador/a Social</option>
//               <option value="Logopeda">Logopeda</option>
//               <option value="Maestro/a">Maestro/a</option>
//               <option value="Monitor/a de Tiempo Libre">Monitor/a de Tiempo Libre</option>
//               <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
//               <option value="Trabajador/a Social">Trabajador/a Social</option>
//             </select>
//           </fieldset>
//           <input type="submit" value="Sign up" />
//         </form>

//         <h1>{this.state.error ? "Error" : ""}</h1>
//       </div>
//     );
//   }
// }

// export default Signup;

