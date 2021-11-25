import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Nav from '../component/Nav';
import BigCalendar from '../component/BigCalendar';
import WorkCalendarData from '../pages/WorkCalendarData';
import WorkerInfo from './WorkerInfo';
import WorkInfo from './WorkInfo';
import HolidayInfo from './HolidayInfo';

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
    justifyContent:"center"
  },
  calendar:{
    width:"70%",
    height:"100vh",
    display:"flex",
  }
}));

function WorkCalendar(){
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
      <Nav nameOn="캘린더"></Nav>
      <div className={classes.content}>
        <div className={classes.calendarInfo}>
          <WorkerInfo></WorkerInfo>
          <WorkInfo></WorkInfo>
          <HolidayInfo></HolidayInfo>
        </div>
        <div className={classes.calendar}>
          <BigCalendar events={WorkCalendarData} eventStyleGetter={eventStyleGetter}></BigCalendar>
        </div>
      </div>
    </div>
  );
}

export default WorkCalendar;