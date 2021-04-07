import React from "react";
import { Dialog, Tabs, Tab, DialogContent } from "@material-ui/core";
import Register from "./register";
import Login from "./login";

const allyPrors = (index) => ({
  id: `simple-tab-${index}`,
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function LoginAndRegisterUI(prors) {
  const { openLogIn, handleCloseDialog, value, handleSwith } = prors;
  const handleChange = (event, newIndex) => {
    handleSwith(newIndex);
  };

  return (
    <Dialog open={openLogIn} onClose={handleCloseDialog}>
      <DialogContent>
        <Tabs
          centered
          value={value}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Login" {...allyPrors(0)} />
          <Tab label="Register" {...allyPrors(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Register />
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
}

export default LoginAndRegisterUI;
