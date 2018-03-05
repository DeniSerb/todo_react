import {
  ADD_ALERT,
  REMOVE_ALERT
} from '../components/constants/actions_constants';

export default function notifications(state = { notificationsAsync: [] }, action) {
  switch (action.type) {
    case ADD_ALERT:
      const { message } = action;
      return {
        ...state,
        notificationsAsync: [ ...state.notificationsAsync, { message } ]
      }

    case REMOVE_ALERT:
      let newNotificationsAsync = state.notificationsAsync.slice(1);
      return {
        ...state,
        notificationsAsync: newNotificationsAsync
      }

    default:
      return state;
  }
}