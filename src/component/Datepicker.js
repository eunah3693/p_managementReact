import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Datepickers(props) {
  const classes = useStyles();
  const {label,width,selectedDate,handleDateChange}=props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={label}
        type="date"
        className={classes.textField}
        style={{width:width}}
        InputLabelProps={{
          shrink: true,
        }}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </form>
  );
}