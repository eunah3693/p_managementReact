import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Nav from '../component/Nav';
import BigCalendar from '../component/BigCalendar';
import WorkCalendarData from '../pages/WorkCalendarData';

const useStyles = makeStyles((theme) => ({
  layout:{
      display:"flex",
      "& a":{
          textDecoration:"none"
      }
  },
  content:{
    width:"100%",
    display:"flex",
    alignItems:"center",
    flexDirection:"column"
  },
}));

function WorkCalendar(){
  const classes = useStyles();

  function eventStyleGetter(event, start, end, isSelected){
    console.log(event);
    var backgroundColor = event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  }



  return (
    <div className={classes.layout}>
      <Nav nameOn="캘린더"></Nav>
      <div className={classes.content}>
        <BigCalendar events={WorkCalendarData} eventStyleGetter={eventStyleGetter}></BigCalendar>
      </div>
    </div>
  );

}

export default WorkCalendar;