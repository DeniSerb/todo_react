import axios from 'axios';
import { GET_TASKS, ADD_TASK, DELETE_TASK, GET_TASK_ID, COMPLETE_TASK } from '../components/constants/actions_constants';
import { browserHistory } from 'react-router';
import { notificationsAsync }    from '../components/middlewares/notifications';

const API_URL = `https://aqueous-badlands-77688.herokuapp.com/tasks`;

const HEADERS = new Headers({ 'Content-Type': 'application/json'})
const token = localStorage.getItem('token')
let headers = Object.assign({}, HEADERS)
headers['Authorization'] = token

export function getTasks() {
  return function(dispatch, getState) {
    axios.get(API_URL, { headers: headers })

      .then(res => {
        if (res.status === 200) {
          dispatch({ type: GET_TASKS, payload: res.data });
        }
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}

export function addTask(task) {
  return function(dispatch, getState) {
    axios.post(API_URL, task, { headers: headers })

      .then(res => {
        dispatch({ type: ADD_TASK, payload: res.data });
      })
      .catch(error => {
        console.error(error);
      })

  }

}

export function getTask(id) {
  return function(dispatch, getState) {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/${id}`, { headers: headers })
        .then(res => {
          resolve(res)
          dispatch({ type: GET_TASK_ID, payload: res.data });
        })
        .catch(e => {
          console.error("error: ", e);
          reject(e)
        })
    })
  }
}

export function deleteTask(id){
  return function(dispatch, getState) {
    let body = { token: token };
    axios.delete(`${API_URL}/${id}`, { params: body, headers: headers })
      .then(res => {
        dispatch({ type: DELETE_TASK, payload: id });
      })
      .catch(id => {
        console.error("error", id);
      })
  }
}



export function editTask(task) {
  return function(dispatch, getState) {
    axios.patch(`${API_URL}/${task.id}`, task, { headers: headers })

      .then(res => {
        setTimeout(() => {
          browserHistory.push('/');
          location.reload();
        }, 1)
      })
      .catch(e => {
        console.error("Dispatching editTask: failed! ", e);
      })
  }
}

export function completeTask(id, active) {
  return function(dispatch, getState) {
    if (active) {
      active = false
    } else {
      active = true
    }

    let task = { id: id, active: active }
    let body = { task: task }
    axios.patch(`${API_URL}/${task.id}`, body, { headers: headers })

      .then(res => {
        dispatch({ type: COMPLETE_TASK, payload: res.data });
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}