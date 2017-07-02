import { combineReducers } from 'redux';
import appReducer from './appReducers'
// import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
