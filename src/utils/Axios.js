import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1/',
  headers: {
    'x-auth-token': localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '',
  },
});
export default instance;
