import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  custom: {
    left: theme.spacing(-1),
    zIndex: '1',
    '&::before': {
      color: theme.palette.text.secondary,
      // fontSize: theme.spacing(3.5),
    },
  },
}));

function PreButton(props) {
  const classes = useStyle();
  const { className, onClick } = props;
  return (
    <button className={`${className} ${classes.custom}`} onClick={onClick} />
  );
}

export default PreButton;
