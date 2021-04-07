import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterUI from "./registerUI";
import { registerThunk } from "../../Redux/Slice/user";

function Register() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleRegister = useCallback(
    (user) => {
      dispatch(registerThunk(user));
    },
    [dispatch]
  );
  return <RegisterUI handleRegister={handleRegister} user={user} />;
}

export default Register;
