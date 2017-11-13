import React, { Component } from 'react';
import logo from './logo.svg';
import { NavigationDrawer, Button, FontIcon, Card, CardTitle, CardText, Slider, Media,  MediaOverlay } from 'react-md';

const QUOTATION_MARK = 0;


class Home extends Component {
    constructor() {
        super();
        this.state = {
          largepictureurl: ''
        }
    
        this.componentDidMount = this.componentDidMount.bind(this);
    }
       
    /**
     * Description of method "componentDidMount".
     */
    componentDidMount() {

        document.title = "RankIt!";

        var self = this;

        //alert("did mount");   
        fetch("https://randomuser.me/api")
        .then((resp) => resp.json())
        .then(function(data) {

            //console.log(data.results[0].picture.large);

            self.setState({ largepictureurl: data.results[0].picture.large });

        })
    }
    
    render() {
        return (    
  
            <div className="App">
                
                <h1>So work in progress! On the page "Material Design Experiments" there is something to see, not much</h1>

                <div>Technology stack used or to be used here:
                
                    <ul>

                        <li>Drupal 8</li>
                        <li>React</li>
                        <li>React Material Design</li>
                        <li>Jest</li>     
                        <li>Sass</li>                                                
                        
                    </ul>
                
                </div>
                
                <div>
                    <Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/anotherpage">Just a test page</Button>
                </div>

                <div>                
                    <Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/mdexperiments">Material Design Experiments</Button>
                </div>

                <div>                
                    <Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/chesstutorial">Chess tutorial (drag and drop)</Button>
                </div>

            </div>
          
        );
    }

}

export default Home;

// <div className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h2>Welcome to React</h2>
// </div>
// <p className="App-intro">
// To get started, edit <code>src/App.js</code> and save to reload.
// </p>