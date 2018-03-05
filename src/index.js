import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import List from './components/tasks/tasks_list';
import TaskDetails from './components/tasks/task_details_page';
import Sign_up from './components/user/Sign_up';
import Login_page from './components/user/login';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';
import Email_confirmation from './components/user/email_confirmation';
import Edit from './components/tasks/edit_task';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(
  hashHistory,
  store
);

const token = localStorage.getItem('token')

if (token && token.length === 30) {
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={List}/>
      <Route path="/tasks/:id/edit" component={Edit} />
      <Route path="/tasks/:id" component={TaskDetails} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
} else {
  ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path='/users/login' component={Login_page} />
      <Route path="/users/email_confirmation" component={Email_confirmation} />
    </Router>
  </Provider>,
  document.getElementById('root')
  );
}

store.subscribe(() => {
  console.log(store.getState());
})