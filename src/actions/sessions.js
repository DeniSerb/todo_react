import axios              from 'axios';
import { browserHistory } from 'react-router';
import { push }           from 'react-router-redux'
import { locations }      from '../components/locations';
import { notificationsAsync }    from '../components/middlewares/notifications';

const HEADERS = new Headers({ 'Content-Type': 'application/json'})

const URL = 'https://aqueous-badlands-77688.herokuapp.com/'

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
        else {
          notificationsAsync({
            message: res.data.message
          })(dispatch);
        }
      })

      .catch(e => {
        console.error("error: ", e);
      })

  }
}