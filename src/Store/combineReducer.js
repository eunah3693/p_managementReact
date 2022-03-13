import { combineReducers } from 'redux';
import loginReducers  from './loginReducers';
import noticeReducers  from './noticeReducers';
import noticeDetailReducers  from './noticeDetailReducers';

const rootReducer = combineReducers({
    login:loginReducers,
    notice:noticeReducers,
    noticeDetail:noticeDetailReducers,
})

export default rootReducer;