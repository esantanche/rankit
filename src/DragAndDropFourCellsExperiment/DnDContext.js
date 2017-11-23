import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import { Grid, Card } from 'react-md';
import HTML5Backend from 'react-dnd-html5-backend'
import TargetCell from './TargetCell';
import SourceCard from './SourceCard';

let cardPosition = [1, 1];
let observer = null



export function moveCard(toRow, toColumn) {
	cardPosition = { row: toRow, column: toColumn };
	console.log('moveCard cardPosition');
	console.log(cardPosition);
	if (observer)
		observer(cardPosition);
	//emitChange()
}


//import BoardSquare from './BoardSquare'
//import Knight from './Knight'
//import './Board.less'

class DnDContext extends Component {
	constructor(props) {
		super(props)
		this.state = { row: 1, column: 1 };
		//this.setState(cardPosition);

		observer = this.handleChange.bind(this);
	}

	handleChange(cardPosition) {
		const nextState = cardPosition
		if (this.state) {
			this.setState(nextState)
		} else {
			this.state = nextState
		}
	}

	// const nextState = { knightPosition }
	// if (this.state) {
	// 	this.setState(nextState)
	// } else {
	// 	this.state = nextState
	// }
	// static propTypes = {
	// 	knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
	// }

	// renderSquare(i) {
	// 	const x = i % 8
	// 	const y = Math.floor(i / 8)
	// 	//console.log('renderSquare ' + x);

	// 	const float_attribute = (x == 7) ? 'right' : 'left'

	// 	return (
	// 		<div key={i} style={{ width: 64, height: 64, float: float_attribute }}>
	// 			<BoardSquare x={x} y={y}>
	// 				{this.renderPiece(x, y)}
	// 			</BoardSquare>
	// 		</div>
	// 	)
	// }

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

	renderCard(render_row, render_column) {
		const { row, column } = this.state;
		console.log('renderCard');
		console.log(row + ',' + column);
		const isCardHere = render_row === row && render_column === column
		return isCardHere ? <SourceCard /> : null
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
