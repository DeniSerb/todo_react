import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import locations from './locations';

export default combineReducers({
  routing: routerReducer,
  tasks,
  locations
})