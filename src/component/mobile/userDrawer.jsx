import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginDialog } from "../../Redux/Slice/dialog";
import UserDrawerUI from "./userDrawerUI";

function UserDrawer(props) {
  const { toggleDrawer } = props;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleToggleDialog = useCallback(() => {
    dispatch(toggleLoginDialog());
  }, [dispatch]);
  return (
    <>
      <UserDrawerUI
        handleToggleDialog={handleToggleDialog}
        user={user}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}

export default UserDrawer;
