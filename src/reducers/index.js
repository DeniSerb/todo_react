import { combineReducers } from 'redux';

import tasks from './tasks';
import playlists from './playlists';
import filterTasks from './filterTasks';


export default combineReducers({
  tasks,
  playlists,
  filterTasks
})