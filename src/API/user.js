import instance from './axiosInstance';

const login = async (email, password) => {
  try {
    const result = await instance.post(
      '/users/login',
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export { login };
