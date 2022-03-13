import { combineReducers } from 'redux';
import loginReducers  from './loginReducers';
import noticeReducers  from './noticeReducers';

const rootReducer = combineReducers({
    login:loginReducers,
    notice:noticeReducers,
})

export default rootReducer;