import { GET_TASKS, ADD_TASK, DELETE_TASK, GET_TASK_ID, COMPLETE_TASK } from '../components/constants/actions_constants';

let initState = {
  items: [],
  item: {},
}

export default function tasks(state = initState, action) {

  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        items: action.payload
    };

    case ADD_TASK:
      return {
        ...state,
        items: [ action.payload, ...state.items ]
    };

    case DELETE_TASK:
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload)
    };

    case GET_TASK_ID:
      return {
        ...state,
        item: action.payload
    };

    case COMPLETE_TASK:
      state.items = state.items.filter(el => el.id !== action.payload.id);
      return {
        ...state,
        items: [ action.payload, ...state.items ]
    };

    default:
      return state;
    }
  }
