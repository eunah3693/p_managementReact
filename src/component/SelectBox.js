import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

export default function SelectBox(props) {
  const classes = useStyles();
  const [option, setOption] = React.useState('');
  const [open, setOpen] = React.useState(false);
  //   select 안에 option
  let selectData=props.selectData;


  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <FormControl className={classes.formControl} style={{minWidth:props.width}}>
        <InputLabel >공지종류</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={option}
          onChange={handleChange}
        >
        {selectData.map((val,idx) => (
            <MenuItem value={val}><span>{val}</span></MenuItem>
        ))}
        </Select>
      </FormControl>
    </div>
  );
}