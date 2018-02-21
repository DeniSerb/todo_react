import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteTask, getTasks, addTask } from '../../actions/tasks';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
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

  componentDidMount () {
    this.context.store.dispatch(getTasks());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ tasks: nextProps.tasks });
  }

  handleChange(field, e) {
    //змінює стейт active на протилежне
    if (field === 'active') {
      // this.state.task.active = !this.state.task.active
      var new_task_active = Object.assign({}, this.state.task);
      new_task_active['active'] = !new_task_active['active'];
      this.setState({ task: new_task_active });
    }
    //змінює стейт решти полів форми
    else {
      // this.state.task[field] = e.target.value
      //копіює стейт
      var new_task = Object.assign({}, this.state.task);
      //створює перемінну
      new_task[field] = e.target.value;
      //назначає новий стейт
      this.setState({ task: new_task });
    }
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onAddTask(this.state.task);
  }

	render() {
		console.log(this.state.tasks, "EEEE")
		return (
	<div className="container">
    <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >
      <div>
      <div className="col-md-3">
      <label>Title:</label>
       <input
          className='form-control'
          onChange={ this.handleChange.bind( this, 'title') }
          type="text"
          placeholder='Enter a title'
          minLength="5"
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
          placeholder='Enter a date'
          required
        />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary center-block form-group">Add task</button>
     </div>
    </form>
     <ul>

 		 {this.props.tasks.map((task, index) =>
        <li key={index}>
          <div className="col-md-4">
            {task.title}
          </div>
          <div className="col-md-2">
            {task.priority}
          </div>
          <div className="col-md-4">
            {task.due_date}
          </div>
          <div className="col-md-2">
             <button onClick={() => this.props.onDeleteTask(task.id)} className="btn btn-danger" title="Delete">delete</button>
          </div>
        </li>
      )}

  		</ul>
			</div>

		);
	}
};


export default connect(
  state => ({
    tasks: state.tasks.items
  }),
    dispatch => ({
      onAddTask: (task) => {
      dispatch(addTask(task));
    },
    onGetTasks: () => {
      dispatch(getTasks());
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    }
  })
)(List);