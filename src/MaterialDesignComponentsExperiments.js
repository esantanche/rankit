import React, { Component } from 'react';
import logo from './logo.svg';
import { NavigationDrawer, Button, FontIcon, Grid, Cell, 
         Card, CardTitle, CardText, CardActions, Slider, Media,  MediaOverlay } from 'react-md';

const QUOTATION_MARK = "\"";

class MaterialDesignComponentsExperiments extends Component {
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

        var self = this;

        fetch("https://randomuser.me/api")
        .then((resp) => resp.json())
        .then(function(data) {

            self.setState({ largepictureurl: data.results[0].picture.large });
            
        })
    }
    
    render() {
        return (    
          
            <div className="App">
                
                <Grid>
                    <Cell size={12}>
                        <CardActions centered={true}>
                            <Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/">Back home</Button>
                        </CardActions>	
                    </Cell>
                </Grid>

                <Grid>

                    <Cell size={6}>
                        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
                            <Media>
                                <img src={this.state.largepictureurl} alt="Randon user" />
                                <MediaOverlay>
                                    <CardTitle title="Title" subtitle="Subtitle">
                                        <Button className="md-cell--right" icon>star_outline</Button>
                                    </CardTitle>
                                </MediaOverlay>
                            </Media>
                            <CardText>
                                <p>
                                    The image above is randomly fetched from https://randomuser.me/api
                                </p>
                            </CardText>
                        </Card>
                    </Cell>

                    <Cell size={6}>
                        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
                            <Media>
                                <iframe allowFullScreen src="https://www.youtube.com/embed/kyAn3fSs8_A" />
                            </Media>
                            <CardTitle title="Archer" subtitle="Highway to the Dangerzone" />
                            <CardText>
                                <p>
                                    Example of Media component from Material Design React. It's playing a youtube video.
                                </p>
                            </CardText>
                            <CardText>
                                <h5>DISCLAIMER</h5>
                                <p>
                                Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made
                                for {QUOTATION_MARK}fair use{QUOTATION_MARK} for purposes such as criticism, comment, news reporting, teaching,
                                scholarship, and research. Fair use is a use permitted by copyright statute that
                                might otherwise be infringing. Non-profit, educational or personal use tips the
                                balance in favor of fair use.
                                </p>
                            </CardText>
                        </Card>
                    </Cell>

                </Grid>
                
            </div>
          
        );
    }

}

export default MaterialDesignComponentsExperiments;