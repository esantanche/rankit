import React, { Component } from 'react';
import logo from './logo.svg';
import { NavigationDrawer, Button, FontIcon, Card, CardTitle, CardText, Slider, Media,  MediaOverlay } from 'react-md';

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

            //console.log(data.results[0].picture.large);

            self.setState({ largepictureurl: data.results[0].picture.large });

            // let authors = data.results;
            // return authors.map(function(author) {
            //   let li = createNode('li'),
            //       img = createNode('img'),
            //       span = createNode('span');
            //   img.src = author.picture.medium;
            //   span.innerHTML = `${author.name.first} ${author.name.last}`;
            //   append(li, img);
            //   append(li, span);
            //   append(ul, li);
            // })
            
        })
    }
    
    render() {
        return (    
          
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/">Back home</Button>
                
                <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
                    <Media>
                        <img src={this.state.largepictureurl} alt="Nature from random" />
                        <MediaOverlay>
                        <CardTitle title="Such nature" subtitle="Wow!">
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
            
            </div>
          
        );
    }

}

export default MaterialDesignComponentsExperiments;