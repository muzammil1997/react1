import { combineReducers } from 'redux';
import flashMessageReducer from './flashMessageReducer';
import authReducer from './authReducer';
export default combineReducers({
    flashMessages: flashMessageReducer,
    auth: authReducer
});