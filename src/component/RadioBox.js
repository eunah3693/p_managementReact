import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  radioData:{
    "& .MuiTypography-body":{
      fontSize:"15px"
    }
  }
  
}));


export default function RadioBox(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const radioData=props.radioData;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
        <RadioGroup value={value} onChange={handleChange} className={classes.radioGroup}>
          <div>
            {radioData.map((val,idx) => (
              <FormControlLabel value={val} control={<Radio color="default"/>} label={val} />
            ))}
          </div>
        </RadioGroup>
  );
}