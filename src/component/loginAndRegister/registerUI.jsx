import React from 'react';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  Grid,
  makeStyles,
  Button,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2.5, 0),
    maxWidth: 400,
  },
  submit: {
    margin: '8px 0px 4px 0px',
  },
}));

function RegisterUI() {
  const classes = useStyle();
  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth size="small" margin="dense" variant="outlined">
            <InputLabel>First name</InputLabel>
            <OutlinedInput name="firstName" label="First name" />
            <FormHelperText>Some important helper text </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth size="small" margin="dense" variant="outlined">
            <InputLabel>Last name</InputLabel>
            <OutlinedInput name="lastName" label="Last name" />
            <FormHelperText>Some important helper text </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <FormControl fullWidth size="small" margin="dense" variant="outlined">
        <InputLabel>Email</InputLabel>
        <OutlinedInput name="email" label="Email" />
        <FormHelperText>Some important helper text </FormHelperText>
      </FormControl>
      <FormControl fullWidth size="small" margin="dense" variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput name="password" label="Password" />
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl fullWidth size="small" margin="dense" variant="outlined">
        <InputLabel>Confirm password</InputLabel>
        <OutlinedInput name="confirmPassword" label="Confirm password" />
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        size="large"
        fullWidth
        className={classes.submit}
      >
        Register
      </Button>
    </form>
  );
}

export default RegisterUI;
