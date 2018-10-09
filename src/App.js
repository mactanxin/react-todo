import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader'

/*
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
		- TodoListItem #N
	- TodoForm
*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoHeader></TodoHeader>
      </div>
    );
  }
}

export default App;
