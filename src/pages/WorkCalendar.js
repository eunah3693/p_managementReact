import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Nav from '../component/Nav';
import BigCalendar from '../component/BigCalendar';


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

  return (
    <div className={classes.layout}>
      <Nav nameOn="캘린더"></Nav>
      <div className={classes.content}>
        <BigCalendar></BigCalendar>
      </div>
    </div>
  );

}

export default WorkCalendar;