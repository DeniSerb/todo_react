const initialState = '';


export default function filterTasks(state = initialState, action) {
  if (action.type === 'FIND_TASKS') {
    return action.payload;
  }
  return state;
}