import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  radioGroup:{
    "& .MuiTypography-root":{
      fontSize:"15px"
    }
  }
  
}));


export default function RadioBox(props) {
  const classes = useStyles();
  const {radioData,radioValue,handleChangeRadio}=props;
 
  return (
        <RadioGroup className={classes.radioGroup} value={radioValue} onChange={handleChangeRadio}>
          <div>
            {radioData.map((val,idx) => (
              <FormControlLabel control={<Radio color="default"/>} label={val} value={val}  checked={radioValue === val} />
            ))}
          </div>
        </RadioGroup>
  );
}