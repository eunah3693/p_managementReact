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

function WorkInfo(props){
  const classes = useStyles();


  return (
    <Card className={classes.layout}>
        <p className={classes.title}><b>{props.data.name}</b>님의 출근부</p>
        <p>부서 : {props.data.department}</p>
        <p>직급 : {props.data.rank}</p>
        <p>직책 : {props.data.position}</p>
        <p>입사일 : {props.data.entryDate}</p>
        <p>지각일수 : {props.data.lateDay}</p>
        <p>이메일 : {props.data.email}</p>
        <p>연락처 : {props.data.phone}</p>
    </Card>
  );
}

let mapStateToProps = (state, /*ownProps*/) => {
  return {
      data: state.workInfo.info,
  };
};

let mapDispatchToProps = (dispatch, /*ownProps*/) => {
  return {
      addNumber: () => dispatch({ type: 'INCREMENT' })
  };
};

WorkInfo = connect(mapStateToProps, mapDispatchToProps)(WorkInfo);

export default WorkInfo;
