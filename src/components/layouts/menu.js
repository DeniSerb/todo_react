import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const token = localStorage.getItem('token')

class Menu extends Component {

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    browserHistory.push('/');
    location.reload()
  }

  render() {
    if (token && token.length === 30){
      return(
        <div className="menu">
          <div className="col-md-4">
            <h3>Taskmanager</h3>
          </div>
          <div className="pull-right btn btn-danger" onClick={this.logout.bind(this)}>logout</div>
        </div>
      )
    } else {
      return(
        <div className="menu">
          <div className="col-md-4">
            <h3>Taskmanager</h3>
          </div>
          <div className="col-md-8">
          <ul className="pull-right menu-nav">
            <li>
              <Link to="/users/login">Login</Link>
            </li>
            <li>
              <Link to="/users/sign_up">Create new acount</Link>
            </li>
          </ul>
          </div>
        </div>
      )
    }
  }
}

export default Menu;