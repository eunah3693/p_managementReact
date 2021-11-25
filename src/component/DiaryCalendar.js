import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// calendar toolbar 
const toolbarStyles = makeStyles((theme) => ({
  layout:{
    display:"flex",
    justifyContent:"space-between",
    marginBottom:"20px"
  }
}));

function Toolbar (props){
  const classes = toolbarStyles();
  function navigate(action){
    console.log(action);
    props.onNavigate(action)
  }

  return (
    <div className={classes.layout}>
      <Button  onClick={() => navigate('PREV')}>PREV</Button>
      <span className="rbc-toolbar-label">{props.label}</span>
      <Button  onClick={() => navigate('NEXT')}>NEXT</Button>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  layout:{
    width:"100%",
    height:"50vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"30px"
  },
}));

moment.locale('ko-kr');
const localizer = momentLocalizer(moment)

function DiaryCalendar(props){
  const classes = useStyles();
 
  return (
    <div className={classes.layout}>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          views={['month']}
          events={props.events}
          components = {{toolbar : Toolbar}}
          style={{ height: "90%" , width: "100%" }}
          eventPropGetter={(props.eventStyleGetter)}
        />
    </div>
  );
}

export default DiaryCalendar;