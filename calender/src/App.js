import React, { Component } from 'react';
import './App.css';
import Boule from './Components/boulle/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boule />
        <h1 className="title-calender"> The Jingle Blank Test</h1>
        <p className="sub-title">A little quiz every day until Christmas</p>
        <img src="https://art.ngfiles.com/images/569000/569746_goldenyakstudio_musical-notes-christmas-tree-card.png?f1512832764" alt="sapin" className="sapin" />
      </div>
    );
  }
}

export default App;
