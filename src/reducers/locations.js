const initialState = {
  locationBeforeTransitions: null
}

export default function locations(state = initialState, action) {
  switch (action.type) {
    case "LOCATION_CHANGE":
      return { ...state, locationBeforeTransitions: action.payload }

    default:
      return state;
  }
}