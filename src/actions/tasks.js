import axios from 'axios';
/*import cookie from 'react-cookies';*/
const API_URL = `http://localhost:3000/tasks`;

const HEADERS = new Headers({ 'Content-Type': 'application/json'})
const token = localStorage.getItem('token')
let headers = Object.assign({}, HEADERS)
headers['Authorization'] = token

export function getTasks() {
  return function(dispatch, getState) {
    axios.get(API_URL, { headers: headers })

      .then(res => {
        if (res.status === 200) {
          dispatch({ type: "GET_TASKS", payload: res.data });
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
        dispatch({ type: "ADD_TASK", payload: res.data });
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function deleteTask(id){
  return function(dispatch, getState) {
    let body = { token: token };
    axios.delete(`${API_URL}/${id}`, { params: body, headers: headers })
      .then(res => {
        dispatch({ type: 'DELETE_TASK', payload: id });
      })
      .catch(id => {
        console.error("error", id);
      })
  }
}