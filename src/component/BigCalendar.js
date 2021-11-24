import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  layout:{
    paddingTop:"80px"
  }
}));

moment.locale('ko-kr');
const localizer = momentLocalizer(moment)


function BigCalendar(){
  const classes = useStyles();

  return (
    <div className={classes.layout}>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 800 , width: 1000 }}
        />
    </div>
  );

}

export default BigCalendar;