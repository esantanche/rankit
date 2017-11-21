import React, { Component } from 'react';
import logo from './logo.svg';
import { NavigationDrawer, Button, FontIcon, Card, CardTitle, CardText, Slider, Media,  
         MediaOverlay, Grid, Cell, CardActions, List, ListItem } from 'react-md';

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

    // TODO center list of techs
    render() {
        return (    
  
            <div className="App">
                
                <Grid>

                    <Cell size={4}>
                        <Card>
                            <CardTitle title="What this website is about" />
                            
                            <CardText>
                                It's an application called RankIt. 
                                It's an experiment used to learn about the technologies listed on the side.
                            </CardText>
                        
                        </Card>
                    </Cell>

                    <Cell size={4}>
                    <Card>
                        <CardTitle title="Who is the author" />
                        
                        <CardText>
                            The author is Emanuele Santanche.
                        </CardText>

                        <CardActions centered={true}>
                            <Button flat primary iconEl={<FontIcon>website</FontIcon>} href="http://emanuelesantanche.com" target="_blank">
                                Click here to visit my website
                            </Button>
                        </CardActions>	
                    
                    </Card>
                </Cell>

                    <Cell size={4}>
                        <Card>
                            <CardTitle title="Technologies used in this project" />
                            
                            <List className="md-cell md-paper md-paper--1" style={{ margin: 'auto' }}>
                                <ListItem primaryText="React" />
                                <ListItem primaryText="React Material Design" />
                                <ListItem primaryText="React Motion" />
                                <ListItem primaryText="..." />
                            </List>

                        </Card>
                    </Cell>

                </Grid>
        
                <Card>
                    <CardTitle title="Experiments" />

                    <Grid>
                        <Cell size={3}>
                            <Card>
                                <CardTitle title="To be replaced..." />
                                <CardText>...with something else</CardText>
                            </Card>
                        </Cell>
                        <Cell size={3}>
                            <Card>
                                <CardTitle title="Experiments with Material Design components" />
                                <CardText>Experiments with Material Design components</CardText>
                                <CardActions centered={true}>
                                    <Button flat primary iconEl={<FontIcon>home</FontIcon>} href="/mdexperiments">Material Design Experiments</Button>
                                </CardActions>	
                            </Card>
                        </Cell>
                        <Cell size={3}>
                            <Card>
                                <CardTitle title="Drag and drop tutorial" />
                                <CardText>Drag and drop tutorial</CardText>
                                <CardActions centered={true}>
                                    <Button flat primary iconEl={<FontIcon>games</FontIcon>} href="/chesstutorial">Chess tutorial (drag and drop)</Button>
                                </CardActions>	
                            </Card>
                        </Cell>
                        <Cell size={3}>
                            <Card>
                                <CardTitle title="Playing with animations" />
                                <CardText>Playing with animations</CardText>
                                <CardActions centered={true}>
                                    <Button flat primary iconEl={<FontIcon>home</FontIcon>} href="/animationplayground">Animation playground</Button>
                                </CardActions>	
                            </Card>
                        </Cell>
                    </Grid>
                
                </Card>

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