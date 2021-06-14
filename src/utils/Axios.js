import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://meropustakalaya-api.herokuapp.com/api/v1/',
  headers: {
    'x-auth-token': localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '',
  },
});
export default instance;
