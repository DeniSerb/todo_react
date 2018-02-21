import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTasks } from './actions/tasks.js'

class App extends Component {
  addTask() {
    console.log('addTask', this.taskInput.value);
    this.props.onAddTask(this.taskInput.value);
    this.taskInput.value = '';
  };

	render() {
		console.log(this.props.testStore)
		return (
	<div>
    <div>
 		   <input type="text" ref={(input)=> {this.taskInput = input}}/>
 		   <button onClick={this.addTask.bind(this)}>Add Task</button>
 		</div>
    <div>
      <button onClick={this.props.onGetTasks}>Get Tasks</button>
    </div>
     <ul>

 		 {this.props.tasks.map((task, index) =>
  <li key={index}>{task.name}</li>
)}

  		</ul>
			</div>

		);
	}
};


export default connect(
  state => ({
    tasks: state.tasks
  }),
  dispatch => ({
    onAddTask: (name) =>{
      const payload = {
        id: Date.now().toString(),
        name: name
      };
      dispatch({ type: 'ADD_TASK', payload });
    },
    onGetTasks: () => {
      dispatch(getTasks());
    }
  })
)(App);