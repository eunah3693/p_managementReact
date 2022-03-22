import { combineReducers } from 'redux';
import loginReducers  from './loginReducers';
import noticeReducers  from './noticeReducers';
import noticeDetailReducers  from './noticeDetailReducers';
import workInfoReducers  from './workInfoReducers';

const rootReducer = combineReducers({
    login:loginReducers,
    notice:noticeReducers,
    noticeDetail:noticeDetailReducers,
    workInfo:workInfoReducers,
})

export default rootReducer;