import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

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
let data=[
   {
       "name":"김은아",
       "department":"개발",
       "rank":"직급",
       "position":"매니저",
       "entryDate":"2021-01-04",
       "workingDay":"2021-01-04",
       "lateDay":"2021-01-04",
       "email":"eunah@guworldwide.com",
       "phone":"010-9824-2104",
   }
]
function WorkInfo(){
  const classes = useStyles();


  return (
    <Card className={classes.layout}>
        <p className={classes.title}><b>{data[0].name}</b>님의 출근부</p>
        <p>부서 : {data[0].department}</p>
        <p>직급 : {data[0].rank}</p>
        <p>직책 : {data[0].position}</p>
        <p>입사일 : {data[0].entryDate}</p>
        <p>근속일수 : {data[0].workingDay}</p>
        <p>지각일수 : {data[0].lateDay}</p>
        <p>이메일 : {data[0].email}</p>
        <p>연락처 : {data[0].phone}</p>
    </Card>
  );
}

export default WorkInfo;