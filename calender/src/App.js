import React, { Component } from 'react';
import './App.css';
import BouleList from "./Components/BouleList/index"
import Popup from './Components/Popup/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BouleList />
        <Popup />
      </div>
    );
  }
}

export default App;
