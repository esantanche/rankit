import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { Card, CardTitle, CardText } from 'react-md';
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

/**
 * Class SourceCard describing the Material Design Card that can be dragged and dropped.
 */
class SourceCard extends Component {

	/**
	 * Rendering the card and using it as drag source. It means that it's something you can drag and drop.
	 */
	render() {
		const { row, column, connectDragSource, isDragging } = this.props
		return (

			<Card style={{ height: '200px'}} ref={instance => connectDragSource(ReactDOM.findDOMNode(instance))}>
                <CardTitle title="Card to drag" />
                <CardText>You can drag and drop this card to the other cells</CardText>
                <CardText>This card is now in row { row }, column { column }</CardText>
            </Card>
            
		)
	}
}

export default DragSource(ItemTypes.CELL, cardSource, collect)(SourceCard);


// <Cell size={6} style={styleCells} ref={instance => connectDropTarget(ReactDOM.findDOMNode(instance))}>
// {children}
// </Cell> 
