import React, { Component } from 'react'
import { Button, Card, CardActions, FontIcon, Grid, Cell } from 'react-md';
import PropTypes from 'prop-types';

// Documentation style guidelines from https://react-styleguidist.js.org/docs/documenting.html

/**
 * This component renders the number buttons, 1 to 9.
 * 
 * When a number button is clicked, it calls the function the parent component passed as prop.
 */
export default class Pad extends Component {

    // Thanks to this definition, you will see a warning inthe debug console if
    // the component Pad is used without passing to it the prop handleKeypadButtonClick
    static propTypes = {
        /** It's the function this component is supposed to call when a button (2 to 9) is clicked */
        handleKeypadButtonClick: PropTypes.func.isRequired
    };
    
    render() {

        return (
            <div>
                <Grid>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button disabled={true} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    1
                                </Button>
                            </CardActions>	

                        </Card>
                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>         
                                <Button onClick={() => this.props.handleKeypadButtonClick(2)} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    2 ABC
                                </Button>
                            </CardActions>	                                   
                        </Card>
                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleKeypadButtonClick(3)} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    3 DEF
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleKeypadButtonClick(4)} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    4 GHI
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleKeypadButtonClick(5)} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    5 JKL
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleKeypadButtonClick(6)} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    6 MNO
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleKeypadButtonClick(7)} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    7 PQRS
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleKeypadButtonClick(8)} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    8 TUV
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleKeypadButtonClick(9)} raised primary 
                                        iconEl={<FontIcon>dialpad</FontIcon>}>
                                    9 WXYZ
                                </Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
