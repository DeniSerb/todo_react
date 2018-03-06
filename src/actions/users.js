import axios from 'axios';
import { browserHistory } from 'react-router';
import { notificationsAsync }    from '../components/middlewares/notifications';

const HEADERS = new Headers({ 'Content-Type': 'application/json'})
let headers = Object.assign({}, HEADERS)

const URL = 'https://aqueous-badlands-77688.herokuapp.com'

const USERS_URL = URL + '/users'


export function signUp(user) {
  return function(dispatch, getState) {
    let body = { user: user }
    axios.post(`${USERS_URL}`, body, { headers: HEADERS })

      .then(res => {
        if (status === 200) {
        setTimeout(() => {
          browserHistory.push('#/users/login');
          location.reload()
        }, 1000)
        } else {
          notificationsAsync({
            message: res.data.message
          })(dispatch);
        }
      })

      .catch(error => {
        notificationsAsync({
          message: 'error'
        })(dispatch);
      })
  }
}

export function emailConfirmation(token) {
  return function(dispatch, getState) {
    let body = {user: token};
    axios.post(`${USERS_URL}/email_confirmation`, body, { headers: HEADERS })

      .then(res => {
        console.log(res.data)
        if (res.status === 200) {
          setTimeout(() => {
            browserHistory.push('#/users/login');
            location.reload()
          }, 1000)
        } else {
          notificationsAsync({
            message: 'error'
          })(dispatch);
        }
      })

      .catch(e => {
        notificationsAsync({
          message: 'error'
        })(dispatch);
      })
  }
}