import React from 'react';
import { Dialog, Tabs, Tab, DialogContent } from '@material-ui/core';
import LoginUI from './loginUI';
import RegisterUI from './registerUI';

function LoginAndRegisterUI() {
  return (
    <Dialog open>
      <DialogContent>
        <Tabs
          centered
          value={0}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        {/* <LoginUI /> */}
        <RegisterUI />
      </DialogContent>
    </Dialog>
  );
}

export default LoginAndRegisterUI;
