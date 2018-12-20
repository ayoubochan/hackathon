import React, { Component } from 'react';
import './App.css';
import Background from './components/Background/index';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      img : 'green',
    }
  }

  handleNameChange(img){
    this.setState({ 
      img : img
    });
  }

  render() {
    return (
      <div className={this.state.img}>
      <h1> Blank Test Calender !</h1>
      <img src="https://i.goopics.net/r5DWm.png" alt="radio" className = "radio"></img>

      <Background handleNameChange={(className) => this.handleNameChange(className)}/>
        
      </div>
    );
  }
}

export default App;
