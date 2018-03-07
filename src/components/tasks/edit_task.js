import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { getTask, editTask }  from '../../actions/tasks';
import Menu                   from '../layouts/menu';
import '../../index.css';

class Edit extends Component {

  constructor() {
    super();
    this.state = {
      task: {}
    };
  }

  static contextTypes = {
    store: React.PropTypes.object
  };

  componentDidMount () {
    let id = this.props.params.id;
    this.context.store.dispatch(getTask(id))
      .then(response => {
        this.setState({task: response.data});
      })
  };

  handleChange(field, e) {
    let new_task = Object.assign({}, this.state.task);
    new_task[field] = e.target.value;
    this.setState({ task: new_task });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onEditTask(this.state.task);
  }

  render() {
    console.log(this.props, "props")
    const {task} = this.state;
      return (
        <div>
          <Menu
            currentLocation={this.props.location.pathname}
          />
          <div className='container'>
            <div className='col-sm-3' />
              <div className='col-sm-6'>
                <h2 className='text-center'>Task update</h2>
                <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >
                  <label>Title:</label>
                  <input className='form-control' type="text" value={task.title} name='title' onChange={this.handleChange.bind(this, 'title')} required minLength="1" maxLength="30" />

                  <label>Description:</label>
                  <input className='form-control' type="text" value={task.description} name='description' onChange={this.handleChange.bind(this, 'description')} required />

                  <label>Priority:</label>
                  <input className='form-control' type="number" value={task.priority} name='priority' onChange={this.handleChange.bind(this, 'priority')} required min="1" max="5" />

                  <label>Date:</label>
                  <input className='form-control' type="date" value={task.due_date} name='due_date' onChange={this.handleChange.bind(this, 'due_date')} required />
                  <br/>
                  <div className='save'>
                  <button className="btn btn-success form-group">Save</button>
                  </div>
                </form>

              </div>

          </div>

        </div>
      );
  }
}

export default connect(
  state => ({
    tasks_edition: state.tasks.item
  }),

  dispatch => ({
    onEditTask: (task) => {
      dispatch(editTask(task));
    }
  })

)(Edit);