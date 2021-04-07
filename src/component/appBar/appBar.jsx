import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomAppBar from "./appBarUI";
import { toggleLoginDialog } from "../../Redux/Slice/dialog";

function AppBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const toggleLogin = useCallback(() => {
    dispatch(toggleLoginDialog());
  }, [dispatch]);
  return <CustomAppBar handleToggleLogin={toggleLogin} user={user} />;
}

export default AppBar;
