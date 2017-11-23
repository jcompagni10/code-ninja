import session from './session';
import sessionErrors from './session_errors';

import {combineReducers} from 'redux';

export default combineReducers({
  session,
  sessionErrors
});
