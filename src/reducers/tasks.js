const initialState = [];

export default function tasks(state = initialState, action) {
  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TASKS_SUCCESS') {
    return action.payload;
  }
  return state;
}




