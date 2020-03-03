import axios from 'axios'

const service = axios.create({
  baseURL:'http://localhost:3010/api',
  withCredentials: true
})

const errHandler = err => {
  // console.error(err);
  if (err.response && err.response.data) {
    // console.error("API response", err.response.data);
    throw err.response.data.message
  }
  throw err;
}

export default {

  // Method addPicture
  addPicture(file) {
    const formData = new FormData();
    formData.append("photo", file)
    return service
      .post('/auth/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  }
}