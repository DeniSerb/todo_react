import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const token = localStorage.getItem('token')

const Navbar = ({ownProps}) => {
  //визначає нинішній path
  let pathname = ownProps.routing.locationBeforeTransitions.pathname

  function link(link_to, text) {
    //порівнює паз з лінками. активний виділяє
    let if_active = "";
    if (pathname === link_to) {
      if_active = "active nav-items-center";
    } else {
      if_active = "nav-items-center";
    }

    //відображає кожен елемент навбару
    return (
      <div className="nav navbar-nav">
        <li className={if_active}><Link to={link_to}>{text}</Link></li>
      </div>
    );
  }

  //691> норм меню
  if (token && token.length === 30) {
    // user menu
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">TODO</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                {link("/", 'Main')}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle nav-items-center" data-toggle="dropdown">

                    <b className="caret"></b>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </nav>

      </div>
    );

  } else {
    // guest menu
    return (
      <div>

        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Denchik's TaskManager</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                {link("/users/login", 'Log in')}
                {link("/users/sign_up", 'Sign up')}
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li></li>
              </ul>

            </div>

          </div>
        </nav>

      </div>
    );
  }

}

//звязання даних стор із компонентами програми
export default connect(
  ownProps => ({
    ownProps
  })
)(Navbar);