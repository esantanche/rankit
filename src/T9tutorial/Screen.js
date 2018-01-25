import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, Grid, Cell } from 'react-md';

// Documentation style guidelines from https://react-styleguidist.js.org/docs/documenting.html

/**
 * This is the screen component. It shows the digits the user typed and the prediction that has been calculated.
 * 
 * The parent component Keypad provides this information via props.
 */
export default class Screen extends Component {

    static propTypes = {
        /** It's the string containing the digits the user typed */
        typed_string_of_numbers: PropTypes.string.isRequired,
        /** It's the calculated prediction */
        current_prediction: PropTypes.string.isRequired
    };

    render() {

        return (
            <div>
                <Grid>
                    <Cell size={12}>
                        <Card >
                            <CardText>
                                    You typed: { this.props.typed_string_of_numbers.length ? this.props.typed_string_of_numbers : "Nothing!" }
                            </CardText>
                            <CardText>
                                    Predicted word: { this.props.current_prediction.length ? this.props.current_prediction : "None" }
                            </CardText>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

// Thanks to this definition, you will see a warning inthe debug console if
// the component Screen is used without passing to it the props typed_string_of_numbers and current_prediction
// There will a warning as well if the passed prop is not a string
Screen.propTypes = {
    typed_string_of_numbers: PropTypes.string.isRequired,
    current_prediction: PropTypes.string.isRequired
};