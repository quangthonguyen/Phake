import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  custom: {
    right: theme.spacing(-1),
    zIndex: '1',
    '&::before': {
      color: theme.palette.text.secondary,
      // fontSize: theme.spacing(3.5),
    },
  },
}));

function NextButton(props) {
  const classes = useStyle();
  const { className, onClick, style } = props;
  return (
    <button
      className={`${className} ${classes.custom}`}
      style={style}
      onClick={onClick}
    />
  );
}

export default NextButton;
