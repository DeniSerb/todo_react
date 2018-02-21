import axios from 'axios';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux'
import { locations } from '../components/locations';

const HEADERS = new Headers({ 'Content-Type': 'application/json'})

const URL = 'http://localhost:3000'

const SESSION_URL = URL + '/sessions'

const USERS_URL = URL + '/users'

export function Login(session){
  return function(dispatch, getState) {
    let body = { session: session }

    axios.post(`${SESSION_URL}`, body, { headers: HEADERS })

      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);

          locations({
            url: '/'
          })(dispatch);

          browserHistory.push('/');
          location.reload();
        }
      })

      .catch(e => {
        console.error("error: ", e);
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
          }, 2000)
        }
      })

      .catch(e => {
        console.error("error: ", e);
      })
  }
}

/*export function Logout(){
  return function(dispatch, getState) {
    if (cookie.load('token')) {
      let body = JSON.stringify({ token: cookie.load('token') });

      axios.post(`${API_URL}/destroy_token`, body, { headers: headers })
        .then(res => {
          dispatch({ type: 'DELETE_TOKEN_USER', payload: res.data });
          cookie.remove('token', { path: '/' });

          browserHistory.push('#/users/log_in');
          setTimeout(() => {
            location.reload()
          }, 500)

          console.log("res", res)
        })
        .catch(e => {
          console.error("error: ", e);
        })
    }
  }
}*/