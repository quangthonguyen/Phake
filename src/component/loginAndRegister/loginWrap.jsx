import React from 'react';
import { useDispatch } from 'react-redux';
import Login from './login';
import axios from '../../API/axiosInstance';

const LoginWrap = () => {
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    try {
      await axios.get('/users/me');
    } catch (error) {
      console.log(error);
    }

    dispatch({ type: 'user/getUser' });
  };
  return <Login handleClick={handleClick} />;
};

export default LoginWrap;
