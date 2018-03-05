import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailConfirmation } from '../../actions/users';


class Email_Confirmation extends Component {

  componentWillMount() {
    let token = this.props.location.query.email_token;
    this.props.onEmailConfirmation(token);
  }

  render() {
    return(
      <div className="confirmed">
        <h1> Congratulations </h1>
        <h3> Your email was successfully confirmed!</h3>
      </div>
    );
  }
}

export default connect(
  ownProps => ({
    ownProps
  }),
  dispatch => ({
    onEmailConfirmation: (token) => {
      dispatch(emailConfirmation(token));
    }
  })
)(Email_Confirmation);