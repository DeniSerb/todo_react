import React        from 'react';
import { connect }  from 'react-redux';
import { Login }    from '../../actions/sessions';
import Menu         from '../layouts/menu';
import Alert        from '../layouts/alert';

class Login_page extends React.Component {
  constructor() {
    super();
    this.state = {
      session: {
        email: '',
        password: ''
      }
    };
  }

  handleChange(field, e) {
    let new_session = Object.assign({}, this.state.session);
    new_session[field] = e.target.value;
    this.setState({ session: new_session });
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onLogin(this.state.session)
  }

  render() {
    console.log(localStorage, "******************")
    return (
      <div>
        <Menu/>
        <div className="col-md-12">
          <Alert />
        </div>
        <div className='col-sm-3 col-md-4' />

        <div className='col-sm-6 col-md-4' >
          <h2 className='text-center'>Log in form</h2>

          <form className='form-horizontal' onSubmit={ this.handleSubmit.bind(this) } >

            <div>
              <label>Email:</label>
              <input className='form-control' placeholder="Enter your email" type="email" onChange={ this.handleChange.bind(this, 'email') } />
            </div>

            <div>
              <label>Password:</label>
              <input className='form-control' placeholder="Enter your password" type="password" onChange={ this.handleChange.bind(this, 'password') } />
            </div>

            <br />

            <button type="submit" className="btn btn-primary btn-lg center-block">Sign in</button>

          </form>
        </div>

      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onLogin: (session) => {
      dispatch(Login(session));
    }
  })
)(Login_page);