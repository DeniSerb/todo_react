import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTask, editTask} from '../../actions/tasks';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        isEditing: false
      }
    }
  }

  static contextTypes = {
    store: React.PropTypes.object
  };

  handleEdit () {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleChange(field, e) {
    let new_task = Object.assign({}, this.state.task);
    new_task[field] = e.target.value;
    this.setState({ task: new_task });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editTask(this.state.task);
}

  renderTask () {
    return(
     <div>
      {this.props.tasks.map((task, index) =>
        <li className="task-item" key={index}>
          <div className="col-md-4">
            {task.title}
          </div>
          <div className="col-md-2">
            {task.priority}
          </div>
          <div className="col-md-2">
            {task.due_date}
          </div>
          <div className="col-md-2">
             <button onClick={() => this.props.delete(task.id)} className="btn btn-danger" title="Delete">delete</button>
          </div>
          <div className="col-md-2">
             <button onClick={this.handleEdit.bind(this)} className="btn btn-default" title="Edit">edit</button>
          </div>
        </li>
      )}
    </div>
    )
  }

  renderEditForm (id) {
    const {task} = this.state;
    return(
      <form className='form-group' onSubmit={this.handleSubmit.bind(this)}>
      <div className="col-md-2">
        <input className='form-control' onChange={this.handleChange.bind(this, 'title')} placeholder='Edit title' type="text" value={task.title} name='title' required minLength="5" maxLength="30" />
      </div>

      <div className="col-md-3">
        <input className='form-control' onChange={this.handleChange.bind(this, 'description')} placeholder='Edit description' type="text" value={task.description} name='description' required />
      </div>

      <div className="col-md-2">
        <input className='form-control' onChange={this.handleChange.bind(this, 'priority')} placeholder='Edit priority' type="number" value={task.priority} name='priority' required min="-9999" max="9999" />
      </div>

      <div className="col-md-2">
        <input className='form-control' onChange={this.handleChange.bind(this, 'date')} type="date" value={task.due_date} name='due_date' required />
      </div>

      <div className="col-md-1">
        <button type="submit" className="btn btn-success form-group">Save</button>
      </div>
      <div className="col-md-1">
        <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-success form-group">Back to list</button>
      </div>
      </form>
    )
  }

  render() {
    console.log(this.state.isEditing)
    if (this.state.isEditing){
      return (this.renderEditForm())} else {
      return(this.renderTask())
    }
  }
};


export default connect(
  state => ({
    tasks_edition: state.tasks.item
  }),
  dispatch => ({
    onEditTask: (task) => {
      dispatch(editTask(task));
    }
  })
)(Task);