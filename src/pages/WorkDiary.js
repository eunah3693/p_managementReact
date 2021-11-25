import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Nav from '../component/Nav';
import DiaryCalendar from '../component/DiaryCalendar';
import WorkDiaryData from './WorkDiaryData';
import WorkerInfo from './WorkerInfo';
import Card from '@material-ui/core/Card';
import InputBox from '../component/InputBox';
import Button from '@material-ui/core/Button';

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
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  inputWrap:{
    padding:"15px 10px",
    display:"flex"
  },
  submitBtn:{
    marginTop:"20px"
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
  const [data, setData] = useState({
    yesterday:"",
    tommorow:"",
    today:"",
    thisweek:"",
    nextweek:"",
    extra:"",
    comment:"",
  });
  function changeValue(e, key){
    data[key]=e.target.value;
    setData({...data})
  }
  return (
    <div className={classes.layout}>
      <Nav nameOn="작업일지"></Nav>
      <div className={classes.content}>
        <div className={classes.calendarInfo}>
          <WorkerInfo></WorkerInfo>
          <DiaryCalendar events={WorkDiaryData}></DiaryCalendar>
        </div>
        <div className={classes.calendar}>
          <form>
            <Card variant="outlined" className={classes.inputWrap}>
              <InputBox width="500px" multiline={true} rows={5}  label="지난업무" inputValue={data.content} changeValue={(e)=>{changeValue(e,"yesterday")}}></InputBox>
              <InputBox width="500px" multiline={true} rows={5}  label="내일업무" inputValue={data.content} changeValue={(e)=>{changeValue(e,"tommorow")}}></InputBox>
            </Card>
            <Card variant="outlined" className={classes.inputWrap}>
              <InputBox width="1000px" multiline={true} rows={10}  label="오늘업무" inputValue={data.content} changeValue={(e)=>{changeValue(e,"today")}}></InputBox>
            </Card>
            <Card variant="outlined" className={classes.inputWrap}>
              <InputBox width="500px" multiline={true} rows={5}  label="이번주업무" inputValue={data.content} changeValue={(e)=>{changeValue(e,"thisweek")}}></InputBox>
              <InputBox width="500px" multiline={true} rows={5}  label="다음주업무" inputValue={data.content} changeValue={(e)=>{changeValue(e,"nextweek")}}></InputBox>
            </Card>
            <Card variant="outlined" className={classes.inputWrap}>
              <InputBox width="1000px" multiline={true} rows={3}  label="비고" inputValue={data.content} changeValue={(e)=>{changeValue(e,"extra")}}></InputBox>
            </Card>
            <Card variant="outlined" className={classes.inputWrap}>
              <InputBox width="1000px" multiline={true} rows={3}  label="관리자코멘트" inputValue={data.content} changeValue={(e)=>{changeValue(e,"comment")}}></InputBox>
            </Card>
            <div className="tac">
              <Button variant="contained" className={classes.submitBtn}>저장</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WorkDiary;