
import React , {Component} from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
class DateRangepicker extends Component {
  handleSelect(date){
    console.log(date); // native Date object
  }
  render(){
    return (
      <Calendar
        date={new Date()}
        onChange={this.handleSelect}
      />
    )
  }
}

export default DateRangepicker;