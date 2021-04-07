import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../yup/yup.js";
import CustomOutlinedInput from "../common/customOutlinedInput.jsx";

const useStyle = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2.5, 0),
    maxWidth: 400,
  },
  submit: {
    margin: "8px 0px 4px 0px",
  },
  progress: {
    color: "inherit",
    position: "absolute",
  },
}));

function RegisterUI(prors) {
  const { handleRegister, user } = prors;
  const { registerLoading, registerError } = user;
  const classes = useStyle();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => handleRegister(data);

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <CustomOutlinedInput
            label="First Name"
            name="firstName"
            inputRef={register}
            errors={errors.firstName}
            disabled={registerLoading}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomOutlinedInput
            label="Last name"
            name="lastName"
            inputRef={register}
            errors={errors.lastName}
            disabled={registerLoading}
          />
        </Grid>
      </Grid>
      <CustomOutlinedInput
        label="Email"
        name="email"
        inputRef={register}
        errors={errors.email}
        disabled={registerLoading}
      />
      <CustomOutlinedInput
        label="Password"
        name="password"
        inputRef={register}
        errors={errors.password}
        disabled={registerLoading}
      />
      <CustomOutlinedInput
        label="Confirm Password"
        name="confirmPassword"
        inputRef={register}
        errors={errors.confirmPassword}
        disabled={registerLoading}
      />
      <Button
        variant="contained"
        color="primary"
        disableElevation
        size="large"
        fullWidth
        className={classes.submit}
        type="submit"
        disabled={registerLoading}
      >
        Register
        {registerLoading && (
          <CircularProgress size={24} classes={{ root: classes.progress }} />
        )}
      </Button>
      <Typography
        variant="caption"
        display="block"
        align="center"
        color="error"
      >
        {registerError}
      </Typography>
    </form>
  );
}

export default RegisterUI;
