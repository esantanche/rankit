import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home.js'
import MaterialDesignComponentsExperiments from './MaterialDesignComponentsExperiments.js'
import ChessboardTutorialApp from './ChessboardTutorial/ChessboardTutorialApp.js'
import AnimationPlayground from './AnimationPlayground/AnimationPlayground.js'
import DragAndDropFourCellsExperimentApp from './DragAndDropFourCellsExperiment/DragAndDropFourCellsExperimentApp.js'
import T9TutorialApp from './T9tutorial/T9TutorialApp'

/**
 * This is the main component representing the app.
 */
class App extends Component {
  
  /**
   * Defining the routing for the application.
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
          <Route path="/draganddropfourcellsexperimentapp" component={DragAndDropFourCellsExperimentApp} />
          <Route path="/t9tutorial" component={T9TutorialApp} />
        </div>
      </BrowserRouter>
            
    );
  }
}

export default App;
