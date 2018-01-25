import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Card, CardActions, Grid, Cell } from 'react-md';

export default class Commands extends Component {

    static propTypes = {
        /** It's the function this component is supposed to call when a command button (cycle, clear or delete) is clicked */
        handleFunctionKeypadButtonsClick: PropTypes.func.isRequired
    };
    
    render() {

        return (
            <div>
                <Grid>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleFunctionKeypadButtonsClick("cycle")} raised primary>
                                    Cycle
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleFunctionKeypadButtonsClick("clear")} raised primary>
                                    Clear
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardActions centered={true}>
                                <Button onClick={() => this.props.handleFunctionKeypadButtonsClick("delete")} raised primary>
                                    Delete
                                </Button>
                            </CardActions>	
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
