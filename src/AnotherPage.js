import React, { Component } from 'react';

import { NavigationDrawer, Button, FontIcon, Card, CardTitle, CardText, Slider, Media,  MediaOverlay } from 'react-md';


class AnotherPage extends Component {
    
    render() {
        return (    
          
            <div>
                
                <Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/">Back home</Button>
                            
                <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
            
                    <CardText>
                        <p>
                        This is an example of the component CardText in Material Design React
                        </p>
                    </CardText>

                </Card>
                    
                
            
            </div>
          
        );
    }

}

export default AnotherPage;