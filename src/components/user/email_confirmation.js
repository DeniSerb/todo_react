import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailConfirmation } from '../../actions/users';
import Image from './Anime.png'


class Email_Confirmation extends Component {

  componentWillMount() {
    let token = this.props.location.query.email_token;
    this.props.onEmailConfirmation(token);
  }

  render() {
    return(
      <div className="container">
        <div className="alert alert-success">
          <strong>Success!</strong> Your email confirmed.
        </div>
        <img src={Image} />
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