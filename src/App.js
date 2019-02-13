import React, { Component } from 'react';
import NewClass from './components/NewClass';
import './App.css';
import ListClass from './components/ListClass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListClass />
        <NewClass />
      </div>
    );
  }
}

export default App;
