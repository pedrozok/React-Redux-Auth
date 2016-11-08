import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import profileReducer from './profile_reducer';

const rootReducer = combineReducers({
  auth : authReducer,
  profile : profileReducer
});

export default rootReducer;
