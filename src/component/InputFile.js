import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"800px",
    "& .MuiFormControl-root":{
        width:"80%"
    },
    "& .MuiOutlinedInput-input":{
        padding:"10px 14px"
    },
    "& .MuiFormLabel-root":{
    lineHeight:"2px"
    },
    "& .MuiButtonBase-root":{
        width:"20%"
    },
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

export default function InputFile(props) {
  const classes = useStyles();
  const {label, inputValue, changeFile} = props;

  return (
    <div className={classes.root}>
      <TextField  id="outlined-basic"  variant="outlined" className={classes.inputBox} label={label} />
      <Button variant="contained"   component="label" value={inputValue}>  
        파일첨부
        <input
            type="file"
            hidden onChange={changeFile}
        />
      </Button>
    </div>
  );
}