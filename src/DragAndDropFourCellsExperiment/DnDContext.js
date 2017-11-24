import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import { Grid, Card } from 'react-md';
import HTML5Backend from 'react-dnd-html5-backend'
import TargetCell from './TargetCell';
import SourceCard from './SourceCard';

//let cardPosition = [1, 1];
let observer = null

export function moveCard(toRow, toColumn) {
	const cardPosition = { row: toRow, column: toColumn };
	console.log('moveCard cardPosition');
	console.log(cardPosition);
	if (observer)
		observer(cardPosition);
}

class DnDContext extends Component {
	constructor(props) {
		super(props)

		const storedState = localStorage.getItem('RankIt-DragAndDropFourCellsExperiment');

		if (storedState) {
			//console.log('there seem to be some stored state');
			//console.log(storedState);
		    this.state = JSON.parse(storedState);
		} else {
			this.state = { row: 1, column: 1 };
			localStorage.setItem('RankIt-DragAndDropFourCellsExperiment', JSON.stringify(this.state));
		}

		//console.log('State in constructor');
		//console.log(this.state);

		observer = this.handleChange.bind(this);
	}

	handleChange(cardPosition) {
		const nextState = cardPosition
		if (this.state) {
			this.setState(nextState)
		} else {
			this.state = nextState
		}
		localStorage.setItem('RankIt-DragAndDropFourCellsExperiment', JSON.stringify(this.state));
	}

	renderRow(row) {
		let rendered_row_to_return = [];

		for (let render_column = 1;  render_column < 3; render_column += 1) {
			const key_for_cell = ((row * 2) + render_column);
			rendered_row_to_return.push(
				<TargetCell key={ key_for_cell } row={row} column={render_column}>
					{this.renderCard(row, render_column)}
				</TargetCell>
			);
		}

		return rendered_row_to_return;
	}
      /* the same as your div height */
	renderCard(render_row, render_column) {
		const { row, column } = this.state;
		//console.log('renderCard');
		//console.log(row + ',' + column);
		const isCardHere = render_row === row && render_column === column
		return isCardHere ? <SourceCard row={ render_row } column={ render_column } /> : 
			<div style={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '200px' }}>
				
					This is row { render_row }, column { render_column }.
				
			</div>
	}

	render() {

		//const { card_row, card_column } = this.state;

		let rendered_to_return = [];

		for (let render_row = 1; render_row < 3; render_row += 1) {
			rendered_to_return.push(
				<Grid>
					{this.renderRow(render_row)}
				</Grid>
			);

			//squares.push(this.renderSquare(i))
		}

		return rendered_to_return;
	}
}

export default DragDropContext(HTML5Backend)(DnDContext);
