import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    token && (config.headers['Authorization'] = 'Bearer ' + token);
    return config;
  },
  (error) => {
    return Promise.reject('dasda');
  }
);
instance.interceptors.response.use(
  (response) => {
    if (response.config.url === '/users/login') {
      const { refreshToken, token } = response.data;
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('token', token);
      instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    return response;
  },
  async (error) => {
    const { status, url } = error.response;
    if (status === 401) {
      if (url === `${process.env.REACT_APP_API_BASE_URL}/users/refreshtoken`) {
        return Promise.reject(error);
      }
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const newToken = await axios.post('/users/refreshtoken', {
          refreshtoken: refreshToken,
        });
        localStorage.setItem('token', newToken);
        instance.defaults.headers.common['Authorization'] =
          'Bearer ' + newToken;
      } catch (error) {
        console.log(error);
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
