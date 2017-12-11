import React, { Component } from 'react'
import { Grid, Cell } from 'react-md';
import { Button, Card, CardTitle, CardText, CardActions, FontIcon, TextField } from 'react-md';
import { t9predict } from './t9processor'

const resetted_state = { typed_string_of_numbers: "", 
                         predicted_words_list: [], 
                         current_prediction: "",
                         prediction_index: 0 }

export default class Keypad extends Component {

	constructor(props) {
        super(props)
        
        this.state = resetted_state;

        this.handleKeypadButtonClick = this.handleKeypadButtonClick.bind(this);
        this.handleFunctionKeypadButtonsClick = this.handleFunctionKeypadButtonsClick.bind(this);
        this.recalculate_new_state = this.recalculate_new_state.bind(this);

	}

    recalculate_new_state(updated_string_of_numbers) {

        // We get an updated string of numbers here
        // We need to recalculate the state

        // Recalculating the array of predictions
        const predicted_words_list = t9predict(updated_string_of_numbers);
        var current_prediction = "";

        // Defining the current prediction that will be displayed
        if (predicted_words_list.length > 0){

            current_prediction = predicted_words_list[0];

        } else {

            current_prediction = "No predictions for now, keep typing or delete last number."

        }

        // Returning the new state
        // The prediction index is zero because we want to display
        // the first prediction every time the string of numbers changes
        return { typed_string_of_numbers: updated_string_of_numbers, 
                 predicted_words_list: predicted_words_list,
                 current_prediction: current_prediction,
                 prediction_index: 0 };

    }

    // Handle button click for button of number ButtonNumber
    handleKeypadButtonClick(ButtonNumber) {

        // A button has been pressed. It's number is ButtonNumber

        // Just concatenating the button number to the string of numbers
        const updated_string_of_numbers = this.state.typed_string_of_numbers + ButtonNumber;

        // The function recalculate_new_state will now recalculate the state and the function
        // this.setState will set it
        this.setState(this.recalculate_new_state(updated_string_of_numbers));
    }

    handleFunctionKeypadButtonsClick(ButtonName) {

        switch(ButtonName) {
            case "delete":

                // If the delete button is clicked, I remove the last number and recalculate the state

                if (this.state.typed_string_of_numbers.length > 0) {

                    // Removing last number from string of numbers
                    const updated_string_of_numbers = this.state.typed_string_of_numbers.slice(0, -1);

                    this.setState(this.recalculate_new_state(updated_string_of_numbers));

                } else {

                    alert("Nothing to delete!");

                }

                break;
            case "cycle":

                // No cycle possible if there is one prediction only or none
                if (this.state.predicted_words_list.length > 1) {

                    var new_prediction_index = ++this.state.prediction_index;

                    if (new_prediction_index >= this.state.predicted_words_list.length) 
                        new_prediction_index = 0;

                    var new_state = Object.assign({}, this.state); 
                    new_state.prediction_index = new_prediction_index;
                    new_state.current_prediction = this.state.predicted_words_list[new_prediction_index];

                    this.setState(new_state);

                } else {

                    alert("Cycle not possible");

                }
                break;                
            case "clear":

                if (this.state.typed_string_of_numbers.length > 0) {

                    this.setState(resetted_state);

                } else {

                    alert("Already clear!");

                }

                break;
            default:
                alert("Bug in code! Unexpected value for ButtonName in handleFunctionKeypadButtonsClick");
        } 
     
    }

    // I called the function handleKeypadButtonClick with a parameter indicating the button number because,
    // when I used the event object, it wasn't working. 

	render() {

		return (
            <div>
				<Grid>
                    <Cell size={4}>
                    </Cell>
					<Cell size={4}>
                        <Grid>
                            <Cell size={12}>
                                <Card >
                                    <CardText>
                                            You typed: { this.state.typed_string_of_numbers.length ? this.state.typed_string_of_numbers : "Nothing!" }
                                    </CardText>
                                    <CardText>
                                            Predicted word: { this.state.current_prediction.length ? this.state.current_prediction : "None" }
                                    </CardText>
                                </Card>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell size={4}>
                                 <Card>
                                    <CardActions centered={true}>
							            <Button onClick={() => this.handleFunctionKeypadButtonsClick("cycle")} raised primary>
                                            Cycle
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
                                        <Button onClick={() => this.handleFunctionKeypadButtonsClick("clear")} raised primary>
                                            Clear
                                        </Button>
                                    </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button onClick={() => this.handleFunctionKeypadButtonsClick("delete")} raised primary>
                                            Delete
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                        </Grid>
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
							            <Button onClick={() => this.handleKeypadButtonClick(2)} raised primary 
                                                iconEl={<FontIcon>dialpad</FontIcon>}>
                                            2 ABC
                                        </Button>
						            </CardActions>	                                   
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button onClick={() => this.handleKeypadButtonClick(3)} raised primary 
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
							            <Button onClick={() => this.handleKeypadButtonClick(4)} raised primary 
                                                iconEl={<FontIcon>dialpad</FontIcon>}>
                                            4 GHI
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button onClick={() => this.handleKeypadButtonClick(5)} raised primary 
                                                iconEl={<FontIcon>dialpad</FontIcon>}>
                                            5 JKL
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button onClick={() => this.handleKeypadButtonClick(6)} raised primary 
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
							            <Button onClick={() => this.handleKeypadButtonClick(7)} raised primary 
                                                iconEl={<FontIcon>dialpad</FontIcon>}>
                                            7 PQRS
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button onClick={() => this.handleKeypadButtonClick(8)} raised primary 
                                                iconEl={<FontIcon>dialpad</FontIcon>}>
                                            8 TUV
                                        </Button>
						            </CardActions>	
                                </Card>
                            </Cell>
                            <Cell size={4}>
                                <Card>
                                    <CardActions centered={true}>
							            <Button onClick={() => this.handleKeypadButtonClick(9)} raised primary 
                                                iconEl={<FontIcon>dialpad</FontIcon>}>
                                                9 WXYZ
                                        </Button>
						            </CardActions>
                                </Card>
                            </Cell>
                        </Grid>
					</Cell>
				</Grid>
            </div>
		)
	}
}
