import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import '../../index.css';

const token = localStorage.getItem('token')

class Menu extends Component {

  logout(){
    localStorage.removeItem('token');
    browserHistory.push('/');
    location.reload()
  }

  render() {
    const menuPattern =
      <div>
        <div className="col-md-4">
          <Link to="/"><h3>Taskmanager</h3></Link>
        </div>
        <div className="pull-right btn btn-danger" onClick={this.logout.bind(this)}>logout</div>
      </div>

    if (token && token.length === 30){
      if (this.props.currentLocation === "/") {
      return(
        <div className="menu">
          { menuPattern }
        </div>
      )
      } else {
        return(
          <div className="menu">
            { menuPattern }
            <div className="col-md-offset-10">
              <Link className="btn btn-primary " to="/">
                Back to list
              </Link>
            </div>
          </div>
        )
      }
    } else {
      return(
        <div className="menu">
          <div className="col-md-4">
            <Link to="/"><h3>Taskmanager</h3></Link>
          </div>
          <div className="col-md-8">
          <ul className="pull-right menu-nav">
            <li>
              <Link to="/users/login">Login</Link>
            </li>
          </ul>
          </div>
        </div>
      )
    }
  }
}

export default Menu;