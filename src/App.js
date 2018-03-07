import React, { Component } from 'react';
import './index.css';
import Menu from './components/layouts/menu';
import SignUp from './components/user/Sign_up';


class App extends Component {

	render() {

		return (
	    <div>
        <Menu />
        <SignUp />
		  </div>

		);
	}
};

export default App