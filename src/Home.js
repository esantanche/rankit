import React, { Component } from 'react';
import { Button, FontIcon, Card, CardTitle, CardText, Media,  
         MediaOverlay, Grid, Cell, CardActions, List, ListItem } from 'react-md';

const QUOTATION_MARK = 0;

// TODO  https://react-styleguidist.js.org/docs/documenting.html
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

        fetch("https://randomuser.me/api")
            .then((resp) => resp.json())
            .then(function(data) {

                //console.log(data.results[0].picture.large);

                self.setState({ largepictureurl: data.results[0].picture.large });

        })

        // TODO this is a test, it has to be deleted
        fetch("/rest/view/articles")
            .then((response) => response.json())
            .then(function(data) {

                console.log('fetch("/rest/view/articles")')
                console.log(data)

                for (var i = 0; i < data.length; i++) {
                    var obj = data[i];
                
                    console.log(obj.nid);
                    console.log(obj.title);
                    console.log(obj.body);

                }

                //t9init(data);
            
        })
    }

    // There are some FontIcon elements that have style={{ width: "20px" }} added. It's because the icon
    // is defective and doesn't have proper width.
    render() {
        return (    
  
            <div className="App">
                
                <Card>
                    <Grid>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>
                        <Cell size={8}>
                            <Card>                                
                                <CardText style={{ fontSize: "200%" }}>
                                    About Rankit!
                                </CardText>
                                <CardText>
                                    What is this website about? What will the application Rankit! do? Who is the author? And other similar questions.
                                </CardText>
                            </Card>
                        </Cell>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>
                    </Grid>

                    <Grid>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                        <Cell size={4} >
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="What this website is about" />
                                
                                <CardText>
                                    It's an application called RankIt. 
                                    It's an experiment used to learn about the technologies listed on the side.
                                </CardText>
                            
                            </Card>
                        </Cell>

                        <Cell size={4}>
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="Who is the author?" />
                                
                                <CardText>
                                    The author is Emanuele Santanche.
                                </CardText>

                                <CardActions centered={true}>

                                    <Button flat primary iconEl={<FontIcon style={{ width: "20px" }}>website</FontIcon>} href="http://emanuelesantanche.com" target="_blank">
                                        Visit my website!
                                    </Button>

                                </CardActions>	

                            </Card>
                        </Cell>

						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                    </Grid>
                    
                    <Grid>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                        <Cell size={4}>
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="Github repository" />
                                
                                <CardText>
                                    This application is open source and published in a github repository. 
                                </CardText>

                                <CardActions centered={true}>
                                    <Button flat primary iconEl={<FontIcon style={{ width: "20px" }}>website</FontIcon>} href="https://github.com/esantanche/rankit" target="_blank">
                                        Visit the repository
                                    </Button>
                                </CardActions>	
                            
                            </Card>
                        </Cell>

                        <Cell size={4}>
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="Technologies used in this project" />

                                <CardText>
                                    &nbsp;
                                </CardText>
                                
                                <List>
                                    <ListItem primaryText="React" />
                                    <ListItem primaryText="React Material Design" />
                                    <ListItem primaryText="React Motion" />
                                    <ListItem primaryText="React Router" />
                                    <ListItem primaryText="React Drag and Drop" />
                                    <ListItem primaryText="(to come) Drupal 8" />
                                    <ListItem primaryText="(to come) Jest" />                                
                                </List>
                                <CardText>
                                    &nbsp;
                                </CardText>
                            </Card>
                        </Cell>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                    </Grid>

                </Card>

                <Card>
                    <Grid>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                        <Cell size={8}>
                            <Card>                                
                                <CardText style={{ fontSize: "200%" }}>
                                    Rankit!
                                </CardText>
                                <CardText>
                                    Here it's where the actual Rankit! application will be when ready.
                                </CardText>
                                <CardText>
                                    The application will fetch a list of products from a Drupal backend.
                                    It will then allow the user to rank the products by drag and dropping them.
                                    This ranking will be stored locally on the user's device and reapplied when
                                    products are fetched again.
                                </CardText>
                            </Card>
                        </Cell>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                    </Grid>
                </Card>

                <Card>
                    <Grid>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                        <Cell size={8} phoneSize={4}>
                            <Card>                                
                                <CardText style={{ fontSize: "200%" }}>
                                    Experiments
                                </CardText>
                                <CardText>
                                    Some experiments created to practice and try out the technologies to be used. 
                                </CardText>
                            </Card>
                        </Cell>

						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                    </Grid>

                    <Grid>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                        <Cell size={4}>
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="Drag and drop experiment" />
                                <CardText>Four cells and a card to drag and drop</CardText>
                                <CardActions centered={true} style={{ position: "relative", bottom:0}}>
                                    <Button flat primary iconEl={<FontIcon>home</FontIcon>} href="/draganddropfourcellsexperimentapp">
                                        See experiment
                                    </Button>
                                </CardActions>	
                            </Card>
                        </Cell>
                        <Cell size={4}>
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="Experiments with Material Design components" />
                                <CardText>Experiments with Material Design components</CardText>
                                <CardActions centered={true}>
                                    <Button flat primary iconEl={<FontIcon>home</FontIcon>} href="/mdexperiments">See experiments</Button>
                                </CardActions>	
                            </Card>
                        </Cell>

                        <Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>


                    </Grid>
                    <Grid>
                        <Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>


                        <Cell size={4}>
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="Drag and drop tutorial" />
                                <CardText>Drag and drop tutorial</CardText>
                                <CardActions centered={true}>
                                    <Button flat primary iconEl={<FontIcon>games</FontIcon>} href="/chesstutorial">See tutorial</Button>
                                </CardActions>	
                            </Card>
                        </Cell>
                        <Cell size={4}>
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="Playing with animations" />
                                <CardText>Playing with animations</CardText>
                                <CardActions centered={true}>
                                    <Button flat primary iconEl={<FontIcon>home</FontIcon>} href="/animationplayground">Animation playground</Button>
                                </CardActions>	
                            </Card>
                        </Cell>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>
                        

                    </Grid>
                    <Grid>
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                        <Cell size={8} phoneSize={4}>
                            <Card style={{ height: "100%" }}>
                                <CardTitle title="T9 tutorial" />
                                <CardText>
                                    This is a bit unrelated, but still good as tutorial.
                                    It's about simulating T9 prediction in mobile phones. 
                                    You press '46' and you get 'go'.
                                </CardText>
                                <CardActions centered={true}>
                                    <Button flat primary iconEl={<FontIcon>home</FontIcon>} href="/t9tutorial">
                                        See experiment
                                    </Button>
                                </CardActions>	
                            </Card>
                        </Cell>
                       
						<Cell size={2} tabletHidden={true} phoneHidden={true}></Cell>

                    </Grid>
                
                </Card>

            </div>
          
        );
    }

}

export default Home;

// , width: "200px" style={{ margin: 'auto', fontSize: '60%' }}
// className="md-cell md-paper md-paper--1"
