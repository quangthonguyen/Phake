import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../Redux/Slice/user";
import LoginUI from "./loginUI";

function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogin = useCallback(
    (user) => {
      dispatch(logIn(user));
    },
    [dispatch]
  );
  return <LoginUI handleLogin={handleLogin} user={user} />;
}

export default Login;
