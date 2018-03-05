import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';

import tasks      from './tasks';
import locations  from './locations';
import alerts     from './alerts';


export default combineReducers({
  routing: routerReducer,
  tasks,
  locations,
  alerts
})