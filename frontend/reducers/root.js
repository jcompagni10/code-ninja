import session from './session';
import sessionErrors from './session_errors';
import {combineReducers} from 'redux';
import entities from './entities';
import fights from './fights';

export default combineReducers({
  session,
  sessionErrors,
  entities,
  fights
});
