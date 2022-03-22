import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  layout:{
    width:"100%",
    padding:"20px",
    textAlign:"left",
    fontSize:"13px",
    margin:"10px 0",
    "& p":{
      lineHeight:"200%"
    }
  },
  title:{
      paddingBottom:"5px"
  }
 
}));

function HolidayInfo(props){
  const classes = useStyles();


  return (
    <Card className={classes.layout}>
        <p className={classes.title}><b>{props.data.name}</b>님의 휴가정보</p>
        <p>사용기간 : {props.data.duration}</p>
        <p>사용가능 : {props.data.usable}</p>
        <p>사용갯수 : {props.data.used}</p>
        <p>유급휴가 : {props.data.paid}</p>
        <p>무급휴가 : {props.data.unpaid}</p>
    </Card>
  );
}

let mapStateToProps = (state, /*ownProps*/) => {
  return {
      data: state.workInfo.holidayInfo,
  };
};

let mapDispatchToProps = (dispatch, /*ownProps*/) => {
  return {
      addNumber: () => dispatch({ type: 'INCREMENT' })
  };
};

HolidayInfo = connect(mapStateToProps, mapDispatchToProps)(HolidayInfo);

export default HolidayInfo;