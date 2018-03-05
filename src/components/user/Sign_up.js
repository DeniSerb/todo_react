import React from 'react';
import { connect } from 'react-redux';
import { signUp  } from '../../actions/users';
import Alert        from '../layouts/alert';

class Sign_up extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        password_confirmation: ''
      }
    };
  }

  handleChange(field, e) {
    let new_user = Object.assign({}, this.state.user);
    new_user[field] = e.target.value;
    this.setState({ user: new_user });
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onSignUp(this.state.user)
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="col-md-12">
          <Alert />
        </div>

          <h2 className='text-center'>Do you have an account?</h2>
          <h3 className='text-center'>You can create it now:</h3>

          <form className='form-horizontal' onSubmit={this.handleSubmit.bind(this)} >

            <div className="col-md-8 col-md-offset-2">
              <label>Email:</label>
              <input
                className='form-control'
                placeholder="Enter your email"
                type="email"
                onChange={this.handleChange.bind(this, 'email')}
                required
              />
            </div>

            <div className="col-md-8 col-md-offset-2">
              <label>Firstname:</label>
              <input
                className='form-control'
                placeholder="Enter your firstname"
                type="text"
                onChange={this.handleChange.bind(this, 'first_name')}
                title="Firstname can contain only letters. 3-10 symbols is allowed"
                required
              />
            </div>

            <div className="col-md-8 col-md-offset-2">
              <label>Lastname:</label>
              <input
                className='form-control'
                placeholder="Enter your lastname"
                type="text"
                onChange={this.handleChange.bind(this, 'last_name')}
                title="Lastname can contain only letters. 4-12 symbols is allowed"
                required
              />
            </div>

            <div className="col-md-8 col-md-offset-2">
              <label>Password:</label>
              <input
                className='form-control'
                placeholder="Enter a password"
                type="password"
                onChange={this.handleChange.bind(this, 'password')}
                minLength="6"
                required
              />
            </div>

            <div className="col-md-8 col-md-offset-2">
              <label>Password confirmation:</label>
              <input
                className='form-control'
                placeholder="Enter a password"
                type="password"
                onChange={this.handleChange.bind(this, 'password_confirmation')}
                minLength="6"
                required
              />
            </div>

            <div className="clearfix"></div>
            <div className="col-md-12">
              <button type="submit" className="sign-up-btn btn btn-primary btn-lg center-block">Sign up</button>
            </div>
          </form>

      </div>
    );

  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onSignUp: (user) => {
      dispatch(signUp(user));
    }
  })
)(Sign_up);