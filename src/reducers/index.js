import { combineReducers } from 'redux';
import registerLogin from './registerLogin.reducers';
import thread from './thread.reducers';
import alert from './alert.reducers';

export default combineReducers({
  registerLogin,
  thread,
  alert,
})