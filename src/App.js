import React, { Component } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader'

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
