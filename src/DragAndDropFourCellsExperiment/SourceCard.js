import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { Card } from 'react-md';
import ItemTypes from './DragAndDropItemTypes'
import ReactDOM from 'react-dom'

const cardSource = {
	beginDrag() {
        console.log('Enter beginDrag SourceCard');
		return {}
	},
}

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		//connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging(),
	}
}

class SourceCard extends Component {

	render() {
		const { connectDragSource, isDragging } = this.props
		return (

			<Card style={{ height: '200px'}} ref={instance => connectDragSource(ReactDOM.findDOMNode(instance))}>
                This is the card to drag
            </Card>
            
		)
	}
}

export default DragSource(ItemTypes.CELL, cardSource, collect)(SourceCard);


// <Cell size={6} style={styleCells} ref={instance => connectDropTarget(ReactDOM.findDOMNode(instance))}>
// {children}
// </Cell> 