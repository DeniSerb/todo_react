import { ADD_ALERT, REMOVE_ALERT } from '../constants/actions_constants';

export function notificationsAsync (params) {
  if (!params.message) {
    return null;
  }

  return function(dispatch) {
    dispatch({ type: ADD_ALERT, message: params.message })

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 6000)
  }
}