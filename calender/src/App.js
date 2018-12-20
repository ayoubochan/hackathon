import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom" 
import PageAccueil from './Components/PageAccueil/index'
import PageRetour from "./Components/PageRetour/index"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={PageAccueil} exact/>
            <Route path="/retour" component={PageRetour}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
