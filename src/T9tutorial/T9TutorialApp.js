import React, { Component } from 'react'
import { Grid, Cell } from 'react-md';
import { Button, Card, CardTitle, CardText, CardActions, FontIcon, List, ListItem } from 'react-md';
import Keypad from './Keypad';
import { t9init } from './t9processor'

const InfoIcon = () => <FontIcon>info</FontIcon>;

export default class T9TutorialApp extends Component {

    // No constructor here because we don't use the variable this

    componentDidMount() {

        console.log("T9TutorialApp::componentDidMount")

        // Fetching the dictionary to pass it to the function t9init for it to create the internal
        // structures the T9 processor needs to work

        // Webpack adds the path of the public folder if you don't specify an absolute path
        // No need to write /public/dictionary.txt or /reactapp/public/dictionary.txt
        fetch("dictionary.txt")
            .then((response) => response.text())
            .then(function(data) {

                //console.log(data)

                t9init(data);
            
        })
    }
    
    // When using the component CardTitle, I always specify the prop 'title', even as empty, to avoid warnings.
    // The 'title' prop is required and would generate a warning if not specified.
    render() {

        return (
            <div>
                <Grid>
                    <Cell size={12}>
                        <CardActions centered={true}>
                            <Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/">Back home</Button>
                        </CardActions>	
                    </Cell>
                </Grid>
        
                <Keypad />

                <Grid>
                    <Cell size={4}>
                    </Cell>

                    <Cell size={4}>
                        <Card>

                            <CardTitle title="" subtitle="Links" />

                            <CardText>
                                This tutorial is in a folder in this github repository of mine: 
                            </CardText>

                            <Button flat primary iconEl={<FontIcon>website</FontIcon>} 
                                    href="https://github.com/esantanche/rankit/tree/master/src/T9tutorial" target="_blank">
                                            T9tutorial
                            </Button>
                            
                            <CardText>
                                The original non-React tutorial is here:
                            </CardText>

                            <Button flat primary iconEl={<FontIcon>website</FontIcon>} 
                                    href="https://www.sainsmograf.com/labs/t9-emulator/" target="_blank">
                                            Original tutorial
                            </Button>
                            
                        </Card>
                    </Cell>

                    <Cell size={4}>
                    </Cell>

                </Grid>

                <Grid>
                    <Cell size={4}>
                    </Cell>

                    <Cell size={4}>
                        <Card>
                            <CardTitle title="" subtitle="Numbers for testing" />

                            <CardText>
                                <List>
                                    <ListItem
                                        rightIcon={<InfoIcon />}
                                        primaryText="testing"
                                        secondaryText="8378464"
                                    />
                                    <ListItem
                                        rightIcon={<InfoIcon />}
                                        primaryText="super"
                                        secondaryText="78737"
                                    />
                                    <ListItem
                                        rightIcon={<InfoIcon />}
                                        primaryText="mario"
                                        secondaryText="62746"
                                    />
                                    <ListItem
                                        rightIcon={<InfoIcon />}
                                        primaryText="legend"
                                        secondaryText="534363"
                                    />
                                </List>
                            </CardText>						
                        </Card>
                    </Cell>

                    <Cell size={4}>
                    </Cell>
                    
                </Grid>

                <Grid>
                    <Cell size={4}>
                    </Cell>

                    <Cell size={4}>
                        <Card>

                            <CardTitle title="" subtitle="Limitations" />

                            <CardText>
                                It is not context-aware or grammar-aware. No smart result ordering. Plurals are not taken into account.
                            </CardText>

                        </Card>
                    </Cell>

                    <Cell size={4}>
                    </Cell>
                    
                </Grid>

            </div>
        )
    }
}