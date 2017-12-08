import React, { Component } from 'react'
import { Grid, Cell } from 'react-md';
import { Button, Card, CardTitle, CardText, CardActions, FontIcon, TextField } from 'react-md';

// TODO
// the link to the folder has to be fixed: href="https://github.com/esantanche/rankit/tree/master/src/DragAndDropFourCellsExperiment" target="_blank">



export default class Keypad extends Component {
	constructor(props) {
		super(props)
        this.state = { word_from_number: "" };

        this.handleKeypadButtonClick = this.handleKeypadButtonClick.bind(this);
	}

    // Handle button click for button of number ButtonNumber
    handleKeypadButtonClick(ButtonNumber) {
        console.log('Button number: ' + ButtonNumber);
        //console.log(ButtonNumber);
        //console.log(e.target.id);
        //e.preventDefault();
        //console.log('The button of the following id was clicked');
        //console.log(e.target.id);
        //console.log(e.target.value);
        //console.log(e.target);

        //console.log(this.props);
        this.setState({ word_from_number: this.state.word_from_number + ButtonNumber });
    }

    // I called the function handleKeypadButtonClick with a parameter indicating the button number because
    // if I used the event object, it wasn't working. 

	render() {

		return (
            <div>
				<Grid>
                    <Cell size={4}>
                    </Cell>
					<Cell size={4}>
                        <Grid>
                            <Cell size={12}>
                                <Card>
                                    <CardText
                                        id="word_from_number"
                                        className="md-cell md-cell--bottom">
                                            { this.state.word_from_number }
                                    </CardText>
                                </Card>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button id="btn1" onClick={() => this.handleKeypadButtonClick(1)} raised primary iconEl={<FontIcon>dialpad</FontIcon>}>
                                            1
                                        </Button>
						            </CardActions>	

                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button id="btn2" onClick={() => this.handleKeypadButtonClick(2)} raised primary iconEl={<FontIcon>dialpad</FontIcon>}>
                                            2 ABC
                                        </Button>
						            </CardActions>	                                   
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button id="btn3" onClick={() => this.handleKeypadButtonClick(3)} raised primary iconEl={<FontIcon>dialpad</FontIcon>}>
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
							            <Button id="btn4" onClick={() => this.handleKeypadButtonClick(4)} raised primary iconEl={<FontIcon>dialpad</FontIcon>}>
                                            4 GHI
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button id="btn5" onClick={() => this.handleKeypadButtonClick(5)} raised primary iconEl={<FontIcon>dialpad</FontIcon>}>
                                            5 JKL
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button id="btn6" onClick={() => this.handleKeypadButtonClick(6)} raised primary iconEl={<FontIcon>dialpad</FontIcon>}>
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
							            <Button id="btn7" onClick={() => this.handleKeypadButtonClick(7)} raised primary iconEl={<FontIcon>dialpad</FontIcon>}>
                                            7 PQRS
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button id="btn8" onClick={() => this.handleKeypadButtonClick(8)} raised primary iconEl={<FontIcon>dialpad</FontIcon>}>
                                            8 TUV
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button id="btn9" onClick={() => this.handleKeypadButtonClick(9)} raised primary 
                                                iconEl={<FontIcon>dialpad</FontIcon>}>
                                                9 WXYZ
                                        </Button>
						            </CardActions>
                                </Card>
                            </Cell>
                        </Grid>

					</Cell>
                    
				</Grid>

                <Grid>

                    <Cell size={4}>
                        <Card>

                            This tutorial is in a folder in this github repository: 
                            <Button flat primary iconEl={<FontIcon>website</FontIcon>} 
                                    href="https://github.com/esantanche/rankit/tree/master/src/DragAndDropFourCellsExperiment" target="_blank">
                                            T9tutorial
                            </Button>
                        </Card>
                    </Cell>

                </Grid>
		
            </div>
		)
	}
}


//<CardActions centered={true}>
//							<Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/">Back home</Button>
//						</CardActions>	

// <CardText className="md-cell md-cell--center" style="margin-left:auto; margin-right:auto">
//                                             WXYZ
//                                     </CardText>	