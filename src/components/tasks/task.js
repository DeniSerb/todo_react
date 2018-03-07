import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import '../../index.css';

class Task extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    complete: PropTypes.func.isRequired
  }

  handleCompleteTask (id, active) {
    this.props.complete(id, active);
  }

  renderTasks() {
    let filterComleted = this.props.tasks

    if (this.props.Completed === "task.active") {
        filterComleted = filterComleted.filter(task => task.active);
      } else {
        filterComleted = filterComleted.filter(task => !task.active);
    }

    return filterComleted.map((task) => {

    return(
      <div>
        <li className="task-item">
          <div className="col-md-5">
            <Link to={`/tasks/${task.id}`}>
              {task.title}
            </Link>
          </div>
          <div className="col-md-2">
            {task.priority}
          </div>
          <div className="col-md-2">
            {task.due_date}
          </div>
          <div className="btn-group col-md-3" role="group" aria-label="Basic example">
              <button onClick={() => this.props.delete(task.id)} className="btn btn-danger" title="Delete">delete</button>
                <Link className="btn btn-primary" to={`/tasks/${task.id}/edit`}>
                  Edit
                </Link>
              <button onClick={this.handleCompleteTask.bind(this, task.id, task.active)} className="btn btn-success" title="Delete">
                <FontAwesome className={task.active ? "fa-check" : "fa-arrow-circle-up"}></FontAwesome>
              </button>
          </div>
        </li>
    </div>
     );
  });
}

  render() {
    console.log(this.props.tasks)
   return (
      <div>
        {this.renderTasks()}
      </div>
    );
  }
};


export default Task;