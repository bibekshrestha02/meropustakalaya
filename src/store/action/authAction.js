import Axios from '../../utils/Axios';
export const login = (email, password) => {
  return async (dispatch) => {
    const res = await Axios.post('/auths/', {
      email,
      password,
    });
    const { data } = res.data;
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: 'login',
      data,
    });
  };
};
export const autoLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch({
        type: 'logout',
      });
      return;
    }
    try {
      const req = await Axios.get('/auths/autologin', {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      const { data } = req.data;
      dispatch({
        type: 'login',
        data,
      });
      return data;
    } catch (error) {
      dispatch({
        type: 'logout',
      });
      return;
    }
  };
};
export const subscribeAction = (id) => {
  return async (dispatch) => {
    const res = await Axios.post('/subscriptions/', { id: id });
    let { data } = res.data;
    dispatch({ type: 'subscribtion', data });
  };
};
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: 'logout' });
  };
};
export const saveBook = (book) => {
  return async (dispatch) => {
    let res = await Axios.post(`/users/saves/${book}`);

    dispatch({ type: 'save', data: res.data.data });
  };
};
