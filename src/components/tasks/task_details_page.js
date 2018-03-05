import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { getTask } from '../../actions/tasks';
import Menu from '../layouts/menu';
import '../../index.css';
import Link from 'react-router'

class TaskDetails extends Component {
  componentDidMount () {
    let id = this.props.params.id;
    this.props.onGetTask(id);
  };

  render() {
  const { task } = this.props
  console.log(this.props.location.pathname, "xxxxxxxx")
   return (
      <div>
        <Menu
          currentLocation={this.props.location.pathname}
        />
          <div className="container task-description">
            <h2 className="text-center">{task.title}</h2>
            <div className="col-md-2">
              <FontAwesome name="clock-o" size="2x" />
              <h4 className="pull-right"><i>{task.due_date}</i></h4>
            </div>
            <div className="clearfix"></div>
            <div className="description">
              <p>{task.description}</p>
            </div>
          </div>
      </div>
    );
  }
};

export default connect(
  state => ({
    task: state.tasks.item
  }),

  dispatch => ({
    onGetTask: (id) => {
      dispatch(getTask(id));
    },
  })

)(TaskDetails);