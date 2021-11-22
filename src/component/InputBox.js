import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
    "& .MuiOutlinedInput-input":{
      padding:"10px 14px"
    },
    "& .MuiFormLabel-root":{
      lineHeight:"2px"
    },
    '& label.Mui-focused': {
      color: '#ccc',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ccc',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#ccc',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ccc',
      },
    },
  },
}));

export default function InputBox(props) {
  const classes = useStyles();
  const {width, multiline, rows, label, inputValue, changeValue}=props;
  

  return (
    <div className={classes.root} >
      <TextField   multiline={multiline} rows={rows} id="outlined-basic" label={label} variant="outlined" style={{width:width}} value={inputValue} onChange={changeValue}/>
    </div>
  );
}