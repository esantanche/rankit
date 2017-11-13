import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home.js'
import AnotherPage from './AnotherPage.js'
import MaterialDesignComponentsExperiments from './MaterialDesignComponentsExperiments.js'
import ChessboardTutorialApp from './ChessboardTutorial/ChessboardTutorialApp.js'


//import { randomImage } from 'utils/random';
//import { QUOTATION_MARK } from 'constants/unicode';

const style = { maxWidth: 320 };
//const nature = randomImage({ width: 600, height: 337, section: 'nature' });
const nature = '';

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
          <Route path="/anotherpage" component={AnotherPage} />
          <Route path="/mdexperiments" component={MaterialDesignComponentsExperiments} />
          <Route path="/chesstutorial" component={ChessboardTutorialApp} />

        </div>
      </BrowserRouter>
            
    );
  }
}

//<Button raised primary iconEl={<FontIcon>home</FontIcon>}>Button</Button>

export default App;
