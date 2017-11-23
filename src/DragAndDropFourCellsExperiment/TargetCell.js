import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import { Button, Card, Cell, CardTitle, CardText, CardActions, FontIcon } from 'react-md';
import ReactDOM from 'react-dom';
import ItemTypes from './DragAndDropItemTypes'
import { moveCard } from './DnDContext'

const styleCells = { background: '#90a4ae', height: '200px' };

const specmethodsTargetCell = {

    // Can we drop items on this target cell?
	canDrop(props) {
        //console.log('Enter canDrop, props:');
        //console.log(props);
		return true;
	},

    // What to do when dropping on this target cell
	drop(props) {
    console.log('Enter drop, props:')
    console.log(props);
		moveCard(props.row, props.column);
	},
}

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}
}

//@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
class TargetCell extends Component {
	static propTypes = {
		row: PropTypes.number.isRequired,
		column: PropTypes.number.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
		connectDropTarget: PropTypes.func.isRequired,
		children: PropTypes.node,
	}

	render() {
		const { key, row, column, connectDropTarget, isOver, canDrop, children } = this.props

		console.log('render TargetCell');
		console.log(this.props);

    // https://github.com/react-dnd/react-dnd/releases/tag/v2.0.0 here there is the trick I used below

    return (

        <Cell size={6} style={styleCells} ref={instance => connectDropTarget(ReactDOM.findDOMNode(instance))}>
                {children}
        </Cell>

    );

	}
}

export default DropTarget(ItemTypes.CELL, specmethodsTargetCell, collect)(TargetCell);
