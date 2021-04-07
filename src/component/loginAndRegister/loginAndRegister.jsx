import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginAndRegisterUI from "./loginAndRegisterUI";
import { toggleLoginDialog, SwithTo } from "../../Redux/Slice/dialog";

function LoginAndRegister() {
  const open = useSelector((state) => state.dialog.open);
  const value = useSelector((state) => state.dialog.value);
  const dispatch = useDispatch();
  const handleCloseDialog = useCallback(() => {
    dispatch(toggleLoginDialog());
  }, [dispatch]);
  const handleSwith = useCallback(
    (value) => {
      dispatch(SwithTo(value));
    },
    [dispatch]
  );
  return (
    <LoginAndRegisterUI
      openLogIn={open}
      value={value}
      handleCloseDialog={handleCloseDialog}
      handleSwith={handleSwith}
    />
  );
}

export default LoginAndRegister;
