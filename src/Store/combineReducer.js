import { combineReducers } from 'redux';
import loginReducers  from './loginReducers';

const rootReducer = combineReducers({
    login:loginReducers,
})

export default rootReducer;