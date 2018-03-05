import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../layouts/menu';
import { addTask } from '../../actions/tasks';
import '../../index.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        title: '',
        description: '',
        priority: '',
        due_date: '',
        user_id: ''
      }
    }
  }

  static contextTypes = {
    store: React.PropTypes.object
  };

  handleChange(field, e) {
    var new_task = Object.assign({}, this.state.task);
    new_task[field] = e.target.value;
    this.setState({ task: new_task });
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onAddTask(this.state.task);
    document.getElementById("new-task-form").reset();
  }

  render() {
  return (
  <div>
  <div className="container">
    <form id="new-task-form" className='form-group' onSubmit={ this.handleSubmit.bind(this) } >
      <div className="create-form">
      <div className="col-md-3">
      <label>Title:</label>
       <input
          className='form-control'
          onChange={ this.handleChange.bind( this, 'title') }
          type="text"
          placeholder='Enter a title'
          minLength="1"
          maxLength="30"
          required
        />
        </div>

        <div className="col-md-3">
        <label>Description:</label>
        <input
          className='form-control col-md-4'
          onChange={ this.handleChange.bind( this, 'description') }
          type="text"
          placeholder='Enter a description'
          required
        />
        </div>

        <div className="col-md-2">
        <label>Priority:</label>
        <input
          className='form-control col-md-4'
          onChange={ this.handleChange.bind( this, 'priority') }
          type="number"
          placeholder='Enter a priority'
          max="3"
          min="1"
          required
        />
        </div>

        <div className="col-md-2">
        <label>Date:</label>
        <input
          className='form-control'
          onChange={ this.handleChange.bind( this, 'due_date') }
          type="date"
          required
        />
        </div>
        <br/>
        <button type="submit" className="btn btn-success form-group">Add task</button>
     </div>
    </form>
    </div>
    </div>
    );
  }
};


export default connect(
  state => ({}),
    dispatch => ({
      onAddTask: (task) => {
      dispatch(addTask(task));
    }
  })
)(Form);