import React, { Component } from 'react';
import './App.css';

import TaskList from './components/TaskList';
import store from './store';

class App extends Component {
  render() {
    return (
    <div><TaskList  tasks={store.tasks} /></div>
    );
  }
}

export default App;
