import React from 'react';
import { connect } from 'react-redux';


const Alert = ({ notification }) => {

  const { notificationsAsync } = notification;

  if (notificationsAsync.length > 0) {
    return (
      <div className='notifications-block container'>
        <ul>
          {
            notificationsAsync.map( (key, index) => {
              return <li key={ index } className='notification alert alert-info'>{ key.message }</li>
            })
          }
        </ul>
      </div>
    );
  }

  return null;

}

export default connect(
  state => ({
    notification: state.alerts
  })
)(Alert);