import axios from 'axios';
let _token = localStorage.getItem("jwt")


const instance = axios.create({
  baseURL: '/api',
  headers: {
    common: {
      'Authorization': `Bearer ${_token}`
    }
  }
})


const ClientService = {
  login: (email, password) => instance.post('/users/login', {email, password}).then(res => res)
}

export default ClientService