import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Nav from '../component/Nav';
import DiaryCalendar from '../component/DiaryCalendar';
import WorkCalendarData from './WorkCalendarData';
import WorkerInfo from './WorkerInfo';


const useStyles = makeStyles((theme) => ({
  layout:{
      display:"flex",
      "& a":{
          textDecoration:"none"
      }
  },
  content:{
    width:"100%",
    height:"100%",
    display:"flex",
  },
  calendarInfo:{
    height:"100vh",
    paddingLeft:"50px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  calendar:{
    width:"75%",
    height:"100vh",
    display:"flex",
  }
}));

function WorkDiary(){
  const classes = useStyles();

  function eventStyleGetter(event, start, end, isSelected){
    console.log(event);
    var backgroundColor = event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: '4px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block',
      color:"#fff",
      fontSize:"13px"
    };
    return {
      style: style
    };
  }

  return (
    <div className={classes.layout}>
      <Nav nameOn="작업일지"></Nav>
      <div className={classes.content}>
        <div className={classes.calendarInfo}>
          <WorkerInfo></WorkerInfo>
          <DiaryCalendar events={WorkCalendarData}></DiaryCalendar>
        </div>
        <div className={classes.calendar}>

        </div>
      </div>
    </div>
  );
}

export default WorkDiary;