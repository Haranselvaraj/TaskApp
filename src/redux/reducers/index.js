import { combineReducers } from 'redux';
import tasks from './tasks';
import inputs from './inputs';

export default combineReducers({
  tasks,
  inputs,
})