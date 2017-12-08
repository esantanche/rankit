import React, { Component } from 'react'
import { Grid, Cell } from 'react-md';
import { Button, Card, CardTitle, CardText, CardActions, FontIcon } from 'react-md';
import Keypad from './Keypad';
//var t9 = require('./t9processor.js');
//import 
import { t9init } from './t9processor'

export default class T9TutorialApp extends Component {
	constructor(props) {
		super(props)
		console.log('now in constructor');
		//console.log(t9);
	    //const dictionary = '';
        this.state = { dictionary: "" };


		var reader = new FileReader();
		reader.onload = function(event) {
			var contents = event.target.result;
			console.log("File contents: " + contents);
		};

		reader.onerror = function(event) {
			console.error("File could not be read! Code " + event.target.error.code);
		};

		//reader.readAsText(new File('./dictionary.txt'));


		const dictionary = '';//require("./dictionary.txt");

		//console.log(dictionary);
		//const mykeymap4 = t9.keyMap[4];

		//onsole.log(mykeymap4);
		//console.log(t9keyMap);
		//var fileContents = './dictionary.txt'.toURL().text;
		//console.log(fileContents);

		//console.log(t9.init);
		//t9init(dictionary);
	}

	componentDidMount() {

        var self = this;

        fetch("/rankitapp/src/T9tutorial/dictionary.txt")
        .then((response) => response.text())
        .then(function(data) {

            console.log("inside componentDidMount ");
			console.log(data);

			t9init(data);
            
        })
    }
    

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

				<Card>
					<CardText>

					</CardText>
				
				</Card>
                
            </div>
		)
	}
}


// <Cell size={6} style={styleCells}>
//                         <Card style={{ height: '200px'}}>
//                             text here
//                         </Card>
//                     </Cell>
