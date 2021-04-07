import React from "react";
import {
  makeStyles,
  Button,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../yup/yup";
import CustomOutlinedInput from "../common/customOutlinedInput.jsx";

const useStyle = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2.5, 0),
    maxWidth: 350,
  },
  submit: {
    margin: "8px 0px 4px 0px",
  },
  progress: {
    color: "inherit",
    position: "absolute",
  },
}));
function LoginUI(props) {
  const { handleLogin, user } = props;
  const { loading, error } = user;
  const classes = useStyle();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => {
    handleLogin(data);
  };
  const demoAccount = {
    email: "demoAccount@gmail.com",
    password: "Vn0937088685",
  };
  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomOutlinedInput
        label="Email"
        name="email"
        inputRef={register}
        errors={errors.email}
        disabled={loading}
      />
      <CustomOutlinedInput
        label="Password"
        name="password"
        inputRef={register}
        errors={errors.password}
        disabled={loading}
        type="password"
      />
      <Button
        variant="contained"
        color="primary"
        disableElevation
        size="large"
        fullWidth
        className={classes.submit}
        type="submit"
        disabled={loading}
      >
        log in
        {loading && (
          <CircularProgress size={24} classes={{ root: classes.progress }} />
        )}
      </Button>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        size="large"
        fullWidth
        className={classes.submit}
        disabled={loading}
        onClick={() => handleLogin(demoAccount)}
      >
        Using Demo Account
        {loading && (
          <CircularProgress size={24} classes={{ root: classes.progress }} />
        )}
      </Button>
      <Typography
        variant="caption"
        display="block"
        align="center"
        color="error"
      >
        {error}
      </Typography>
    </form>
  );
}

export default LoginUI;
