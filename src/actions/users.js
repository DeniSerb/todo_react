import axios from 'axios';
import { browserHistory } from 'react-router';

const HEADERS = new Headers({ 'Content-Type': 'application/json'})
let headers = Object.assign({}, HEADERS)

const URL = 'http://localhost:3000'

const USERS_URL = URL + '/users'


export function signUp(user) {
  return function(dispatch, getState) {
    let body = { user: user }
    // let body = JSON.stringify({user: user});
    axios.post(`${USERS_URL}`, body, { headers: HEADERS })

      .then(res => {
        if (status === 200) {
        setTimeout(() => {
          browserHistory.push('#/users/sign_in');
          location.reload()
        }, 3000)
        } else {
          console.error("error: ");
        }
      })

      .catch(error => {
        console.error("error: ");
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
            browserHistory.push('#/users/sign_in');
            location.reload()
          }, 2000)
        } else {
          console.error("error: ");
        }
      })

      .catch(e => {
        console.error("error: ");
      })
  }
}