import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationDrawer, Button, FontIcon, Card, CardTitle, CardText, Slider, Media,  MediaOverlay } from 'react-md';
//import { randomImage } from 'utils/random';
//import { QUOTATION_MARK } from 'constants/unicode';

const QUOTATION_MARK = 0;
const style = { maxWidth: 320 };
//const nature = randomImage({ width: 600, height: 337, section: 'nature' });
const nature = '';

class App extends Component {
  constructor() {
    super();
    this.state = {
      largepictureurl: ''
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }
   
  componentDidMount() {

    var self = this;

    //alert("did mount");   
    fetch("https://randomuser.me/api")
    .then((resp) => resp.json())
    .then(function(data) {

      console.log(data.results[0].picture.large);

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
        <Button raised primary iconEl={<FontIcon>home</FontIcon>}>Click here</Button>
          
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
              Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
              cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
              lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
              in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
              sodales, et gravida augue faucibus. Maecenas quis porttitor nunc. Suspendisse congue
              ipsum arcu, id aliquam ante dignissim non. Donec maximus, sapien in faucibus molestie,
              eros nisi ornare neque, et vulputate augue velit vel ante. Phasellus rhoncus, elit
              cursus accumsan viverra, mi lectus dictum elit, non vehicula diam nunc non lectus.
              Sed elementum, risus eget fermentum accumsan, nunc ante commodo diam, eget pulvinar
              risus velit eu sapien. Nunc vitae pellentesque nisl.
            </p>
            <p>
              Maecenas lacinia enim ut risus pellentesque euismod. Vestibulum gravida, risus non
              condimentum volutpat, orci elit laoreet elit, in auctor eros orci non quam. Proin ut
              tellus et est dignissim efficitur. Aliquam erat volutpat. Proin pellentesque metus
              sit amet libero auctor aliquet. Donec scelerisque erat in magna sagittis hendrerit.
              Sed pulvinar enim mattis mauris sodales semper. Mauris eu urna at arcu dapibus
              pretium et in ligula. Sed vel vestibulum nunc.
            </p>
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
          <Media>
            <iframe allowFullScreen src="https://www.youtube.com/embed/kyAn3fSs8_A" />
          </Media>
          <CardTitle title="Archer" subtitle="Highway to the Dangerzone" />
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

//<Button raised primary iconEl={<FontIcon>home</FontIcon>}>Button</Button>

export default App;
