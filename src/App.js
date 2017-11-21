import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home.js'
import MaterialDesignComponentsExperiments from './MaterialDesignComponentsExperiments.js'
import ChessboardTutorialApp from './ChessboardTutorial/ChessboardTutorialApp.js'
import AnimationPlayground from './AnimationPlayground/AnimationPlayground.js'

//const style = { maxWidth: 320 };
//const nature = '';

/**
 * This is the main component representing the app.
 */
class App extends Component {
  
  /**
   * Description of method "render".
   */
  render() {
    return (    

      /* Each route is defined with Route */
      
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/mdexperiments" component={MaterialDesignComponentsExperiments} />
          <Route path="/chesstutorial" component={ChessboardTutorialApp} />
          <Route path="/animationplayground" component={AnimationPlayground} />
        </div>
      </BrowserRouter>
            
    );
  }
}

export default App;
