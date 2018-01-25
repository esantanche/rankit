import React, { Component } from 'react'
import { Grid, Cell } from 'react-md';
import Screen from './Screen'
import Commands from './Commands'
import Pad from './Pad'

import { t9predict } from './t9processor'

const initial_state = { typed_string_of_numbers: "", 
                        predicted_words_list: [], 
                        current_prediction: "",
                        prediction_index: 0 }

// Documentation style guidelines from https://react-styleguidist.js.org/docs/documenting.html

/**
 * The idea in React is to break down components into subcomponents,
 * that's why we have, here, the parent component Keypad containing Screen, Commands and Pad.
 */
export default class Keypad extends Component {

    constructor(props) {
        super(props)
        
        this.state = initial_state;

        this.handleKeypadButtonClick = this.handleKeypadButtonClick.bind(this);
        this.handleFunctionKeypadButtonsClick = this.handleFunctionKeypadButtonsClick.bind(this);
        this.recalculate_new_state = this.recalculate_new_state.bind(this);

    }

    /**
     * When the user enters a new digit, this method recalculates the state.
     * It recalulates the list of predictions and selects the first one as the one
     * to be displayed.
     * 
     * The method returns the new state that the caller will set.
     * 
     * @param {string} updated_string_of_numbers 
     */
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

    /**
     * Handle button click for button of number ButtonNumber
     * I defined the function handleKeypadButtonClick with a parameter indicating the button number because,
     * when I used the event object, it wasn't working. 
     * 
     * @param {number} ButtonNumber Number of the button the user clicked
     */
    handleKeypadButtonClick(ButtonNumber) {

        //console.log('Keypad::handleKeypadButtonClick ' + ButtonNumber)

        // Just concatenating the button number to the string of numbers
        // It's best practice to explicitly convert a number to string. 
        // It helps with avoiding bugs
        const updated_string_of_numbers = this.state.typed_string_of_numbers + String(ButtonNumber);

        // The function recalculate_new_state will now recalculate the state and the function
        // this.setState will set it
        this.setState(this.recalculate_new_state(updated_string_of_numbers));
    }

    /**
     * Here we manage three commands: cycle, delete and clear
     * 
     * The button 'delete' deletes last digit entered
     * The button 'clear' clears all digits
     * The button 'cycle' cycles through the preditions if there are many of them
     * 
     * @param {string} ButtonName Name of the command button the user clicked (cycle, delete or clear)
     */
    handleFunctionKeypadButtonsClick(ButtonName) {

        //console.log('Keypad::handleFunctionKeypadButtonsClick ' + ButtonName);

        switch(ButtonName) {
            case "delete":

                // If the delete button is clicked, I remove the last number and recalculate the state

                if (this.state.typed_string_of_numbers.length > 0) {

                    // Removing last number from string of numbers
                    const updated_string_of_numbers = this.state.typed_string_of_numbers.slice(0, -1);

                    if (updated_string_of_numbers.length > 0) {

                        this.setState(this.recalculate_new_state(updated_string_of_numbers));
                        
                    } else {

                        // The input string has been completely deleted

                        this.setState(initial_state);
                        
                    }

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

                    // When using this.setState we can just change only the properties we need to change

                    this.setState({ prediction_index: new_prediction_index,
                                    current_prediction: this.state.predicted_words_list[new_prediction_index] });

                } else {

                    alert("Cycle not possible");

                }
                break;                
            case "clear":

                if (this.state.typed_string_of_numbers.length > 0) {

                    this.setState(initial_state);

                } else {

                    alert("Already clear!");

                }

                break;
            default:
                alert("Bug in code! Unexpected value for ButtonName in handleFunctionKeypadButtonsClick");
        } 
     
    }

    render() {

        return (
            <div>
                <Grid>
                    <Cell size={4}>
                    </Cell>
                    <Cell size={4}>
                        <Screen typed_string_of_numbers={this.state.typed_string_of_numbers} current_prediction={this.state.current_prediction}/>
                        <Commands handleFunctionKeypadButtonsClick={this.handleFunctionKeypadButtonsClick}/>
                        <Pad handleKeypadButtonClick={this.handleKeypadButtonClick}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
