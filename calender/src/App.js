import React, { Component } from 'react';
import './App.css';

import Background from './components/Background/index';
import BouleList from "./Components/BouleList/index"
import Popup from './Components/Popup/index';
import Boule from './Components/boulle/index';


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
      <h1 className = 'title-calender'> Blank Test Calender !</h1>
      <Background handleNameChange={(className) => this.handleNameChange(className)}/>
      <img src="https://i.goopics.net/LOn4W.png" alt="radio" className = "radio"></img>

  
    <BouleList />
    <Popup />
      </div>
    );
  }
}

export default App;
