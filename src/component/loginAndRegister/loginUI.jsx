import React from 'react';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
  IconButton,
  makeStyles,
  Button,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2.5, 0),
    maxWidth: 350,
  },
  submit: {
    margin: '8px 0px 4px 0px',
  },
}));
function LoginUI() {
  const classes = useStyle();
  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <FormControl fullWidth size="small" margin="dense" variant="outlined">
        <InputLabel>Email</InputLabel>
        <OutlinedInput name="email" label="Email" />
        <FormHelperText>Some important helper text </FormHelperText>
      </FormControl>
      <FormControl fullWidth size="small" margin="dense" variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          name="password"
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                {true ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        size="large"
        fullWidth
        className={classes.submit}
        type="submit"
      >
        login
      </Button>
    </form>
  );
}

export default LoginUI;
