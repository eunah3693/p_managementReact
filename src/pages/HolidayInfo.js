import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  layout:{
    width:"100%",
    padding:"10px 0 10px 20px",
    textAlign:"left",
    fontSize:"13px",
    margin:"10px 0"
  },
  title:{
      paddingBottom:"5px"
  }
 
}));
let data=[
   {
       "name":"김은아",
       "duration":"2021-01-04~2022-01-03",
       "usable":1,
       "used":0,
       "paid":0,
       "unpaid":0
   }
]
function HolidayInfo(){
  const classes = useStyles();


  return (
    <Card className={classes.layout}>
        <p className={classes.title}><b>{data[0].name}</b>님의 휴가정보</p>
        <p>사용기간 : {data[0].duration}</p>
        <p>사용가능 : {data[0].usable}</p>
        <p>사용갯수 : {data[0].used}</p>
        <p>유급휴가 : {data[0].paid}</p>
        <p>무급휴가 : {data[0].unpaid}</p>
    </Card>
  );
}

export default HolidayInfo;