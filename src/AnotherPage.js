import React, { Component } from 'react';

import { NavigationDrawer, Button, FontIcon, Card, CardTitle, CardText, Slider, Media,  MediaOverlay } from 'react-md';


class AnotherPage extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       largepictureurl: ''
    //     }
    
    //     this.componentDidMount = this.componentDidMount.bind(this);
    // }
       
    /**
     * Description of method "componentDidMount".
     */
    // componentDidMount() {

    //     var self = this;

    //     //alert("did mount");   
    //     fetch("https://randomuser.me/api")
    //     .then((resp) => resp.json())
    //     .then(function(data) {

    //         console.log(data.results[0].picture.large);

    //         self.setState({ largepictureurl: data.results[0].picture.large });

    //         // let authors = data.results;
    //         // return authors.map(function(author) {
    //         //   let li = createNode('li'),
    //         //       img = createNode('img'),
    //         //       span = createNode('span');
    //         //   img.src = author.picture.medium;
    //         //   span.innerHTML = `${author.name.first} ${author.name.last}`;
    //         //   append(li, img);
    //         //   append(li, span);
    //         //   append(ul, li);
    //         // })
            
    //     })
    // }
    
    render() {
        return (    
          
            <div>
                
                <Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/">Back home</Button>
                            
                <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
            
                    <CardText>
                        <p>
                        Lsome explanations
                        </p>
                        <p>
                        more explanations
                        </p>
                    </CardText>

                </Card>
                    
                
            
            </div>
          
        );
    }

}

export default AnotherPage;