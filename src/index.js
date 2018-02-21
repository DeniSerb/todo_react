import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import './index.css';
import List from './components/tasks/tasks_list';
import Sign_up from './components/user/Sign_up';
import Login_page from './components/user/login';
import './index.css';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';
/*import cookie from 'react-cookies'*/


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
    </Router>
  </Provider>,
  document.getElementById('root')
);
} else {
  ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/users/Sign_up" component={Sign_up}/>
      <Route path='/users/login' component={Login_page} />
    </Router>
  </Provider>,
  document.getElementById('root')
  );
}

store.subscribe(() => {
  console.log("draste", store.getState());
})