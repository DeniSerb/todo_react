import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../layouts/menu';
import Form from './create_task_form';
import Task from './task';
import { deleteTask, getTasks, editTask, completeTask} from '../../actions/tasks';
import '../../index.css';

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

  sortTasksAsc (type) {
    if (type === 'title') {
      let sortedTasksAsc = this.props.tasks.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      this.setState({ tasks: sortedTasksAsc });

    } else {
      let sortedTasksAsc = this.props.tasks.sort(function (a, b) {
        if (a.priority > b.priority) {
          return 1;
        }
        if (a.priority < b.priority) {
          return -1;
        }
        return 0;
      });
      this.setState({ tasks: sortedTasksAsc });
    }
  }

  sortTasksDesc (type) {
    if (type === 'title') {
    let sortedTasksDesc = this.props.tasks.sort(function (a, b) {
        if (b.title > a.title) {
          return 1;
        }
        if (b.title < a.title) {
          return -1;
        }
        return 0;
      });
      this.setState({ tasks: sortedTasksDesc });

    } else {
      let sortedTasksDesc = this.props.tasks.sort(function (a, b) {
        if (b.priority > a.priority) {
          return 1;
        }
        if (b.priority < a.priority) {
          return -1;
        }
        return 0;
      });
      this.setState({ tasks: sortedTasksDesc });
    }
  }

	render() {
	return (
    <div>
    <Menu
      currentLocation={this.props.location.pathname}
    />
	  <div className="container">
      <Form />
      <div className='sort text-center'>
        <h4>Sort Tasks:</h4>
        <div className='btn-group btn pull-right'>
          <button className="btn btn-group btn-default" onClick={this.sortTasksAsc.bind(this, 'priority')}>
            Sort by priority 1-3
          </button>
          <button className="btn btn-group btn-default" onClick={this.sortTasksAsc.bind(this, 'title')}>
            Sort by title a-z
          </button>
        </div>
        <div className='btn-group btn pull-left'>
          <button className="btn btn-group btn-default" onClick={this.sortTasksDesc.bind(this, 'priority')}>
            Sort by priority 3-1
          </button>
          <button className="btn btn-group btn-default" onClick={this.sortTasksDesc.bind(this, 'title')}>
            Sort by title z-a
          </button>
        </div>
      </div>

        <ul>
          <h3>To do:</h3>
          <Task
            tasks={this.props.tasks}
            delete={this.props.onDeleteTask}
            complete={this.props.onCompleteTask}
            Completed="task.active"
          />
          <h3>Done:</h3>
          <Task
            tasks={this.props.tasks}
            delete={this.props.onDeleteTask}
            complete={this.props.onCompleteTask}
            Completed="!task.active"
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
    },

    onCompleteTask: (id, active) => {
      dispatch(completeTask(id, active));
    }
  })
)(List);