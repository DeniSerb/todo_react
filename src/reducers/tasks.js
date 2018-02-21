let initState = {
  items: [],
  item: {},
}

export default function tasks(state = initState, action) {

  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        items: action.payload
    };
    default:
      return state;
    }
  }


