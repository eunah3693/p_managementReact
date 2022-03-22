import { combineReducers } from 'redux';
import loginReducers  from './loginReducers';
import noticeReducers  from './noticeReducers';
import noticeDetailReducers  from './noticeDetailReducers';
import workInfoReducers  from './workInfoReducers';
import calendarReducers  from './calendarReducers';

const rootReducer = combineReducers({
    login:loginReducers,
    notice:noticeReducers,
    noticeDetail:noticeDetailReducers,
    workInfo:workInfoReducers,
    calendar:calendarReducers,
})

export default rootReducer;