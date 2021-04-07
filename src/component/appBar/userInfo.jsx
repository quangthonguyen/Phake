import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logOutThunk } from "../../Redux/Slice/user";
import UserInfoUI from "./userInfoUI";

function InfoUser(prors) {
  const { user } = prors;
  const dispatch = useDispatch();
  const handleLogOut = useCallback(() => {
    dispatch(logOutThunk());
  }, [dispatch]);

  return <UserInfoUI handleLogOutProp={handleLogOut} user={user} />;
}

export default InfoUser;
