import React from 'react';
import { login } from '../../API/user';

function Login(props) {
  const { handleClick } = props;
  let email, password;

  return (
    <form>
      user name: <input type="text" ref={(e) => (email = e)} />
      <br />
      pasword: <input type="text" ref={(e) => (password = e)} />
      <br />
      <button
        type="Submit"
        onClick={async (event) => {
          event.preventDefault();
          const result = await login(email.value, password.value);
          console.log(result);
        }}
      >
        login
      </button>
    </form>
  );
}

export default Login;
