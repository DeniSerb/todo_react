import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../layouts/menu';
import Form from './create_task_form';
import Task from './task';
import { deleteTask, getTasks, editTask} from '../../actions/tasks';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
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

  handleDestroy (id) {
    this.props.onDestroyTask(id);
  }

	render() {
		console.log(this.props.tasks)
	return (
    <div>
    <Menu />
	   <div className="container">
      <Form />
        <ul>
          <Task
            tasks={this.props.tasks}
            delete={this.props.onDeleteTask}
          />
  	     </ul>
		  </div>
    </div>
		);
	}
};


export default connect(
  state => ({
    tasks: state.tasks.items
  }),
    dispatch => ({
    onGetTasks: () => {
      dispatch(getTasks());
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    }
  })
)(List);