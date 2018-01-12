import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'
import Knight from './Knight'
import './Board.less'

/**
 * Class Board representing the chess board.
 */
class Board extends Component {
	
	static propTypes = {
		knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
	}

	renderSquare(i) {
		const x = i % 8
		const y = Math.floor(i / 8)

		const float_attribute = (x === 7) ? 'right' : 'left'

		return (
			<div key={i} style={{ width: 64, height: 64, float: float_attribute }}>
				<BoardSquare x={x} y={y}>
					{this.renderPiece(x, y)}
				</BoardSquare>
			</div>
		)
	}

	renderPiece(x, y) {
		const [knightX, knightY] = this.props.knightPosition
		const isKnightHere = x === knightX && y === knightY
		return isKnightHere ? <Knight /> : null
	}

	render() {
		const squares = []
		for (let i = 0; i < 64; i += 1) {
			squares.push(this.renderSquare(i))
		}

		return <div className="Board">{squares}</div>
	}
}

export default DragDropContext(HTML5Backend)(Board);

// <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
// 				<BoardSquare x={x} y={y}>
// 					{this.renderPiece(x, y)}
// 				</BoardSquare>
// 			</div>