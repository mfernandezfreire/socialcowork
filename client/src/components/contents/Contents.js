import React, { Component } from 'react';
import api from './api';

class Contents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      photos: [],
      username: null
    }
  }

  handleChange(e) {
    console.log("archivos seleccionado")
    console.log(e.target.files[0])

    this.setState({
      ...this.state,
      file: e.target.files[0]
    })
  }

  //esta función maneja qué pasa cuando hago submit en el formulario de subida de imágenes
  handleSubmit(e) {
    e.preventDefault()
    // Reuse of the method "addPicture" from the file '../api'
    api.addPicture(this.state.file).then(photoData => {
      let newPhotos = [...this.state.photos]
      newPhotos.push(photoData.url)

      this.setState({
        ...this.state,
        photos: newPhotos
      })
    })
  }
  render() {                
    return (
      
      <div className="Contents">
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>);

        <h2>Photo Upload</h2>

        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button type="submit">Upload photo</button>
        </form>

        {this.state.photos.map(photo => <img key={photo.url} src={photo.url} alt="" />)}
      </div>
    );
  }
}

export default Contents;