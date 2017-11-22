import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import { Button, Card, Cell, CardTitle, CardText, CardActions, FontIcon } from 'react-md';
import ReactDOM from 'react-dom';


//import Square from './Square'
//import { canMoveKnight, moveKnight } from './Game'
import ItemTypes from './DragAndDropItemTypes'

const styleCells = { background: '#90a4ae', height: '200px' };

const specmethodsTargetCell = {

    // Can we drop items on this target cell?
	canDrop(props) {
        console.log('Enter canDrop, props:');
        console.log(props);
		return true;
	},

    // What to do when dropping on this target cell
	drop(props) {
        console.log('Enter drop, props:')
        console.log(props);
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
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
		connectDropTarget: PropTypes.func.isRequired,
		children: PropTypes.node,
	}

	// renderOverlay(color) {
	// 	return (
	// 		<div
	// 			style={{
	// 				position: 'absolute',
	// 				top: 0,
	// 				left: 0,
	// 				height: '100%',
	// 				width: '100%',
	// 				zIndex: 1,
	// 				opacity: 0.5,
	// 				backgroundColor: color,
	// 			}}
	// 		/>
	// 	)
	// }

	render() {
		const { x, y, connectDropTarget, isOver, canDrop, children } = this.props

		//console.log('black = ' + black);

        // TODO Error: Only native element nodes can now be passed to React DnD connectors.You can either wrap Cell into a <div>, or turn it
        // into a drag source or a drop target itself.
        // https://github.com/react-dnd/react-dnd/issues/851
        // https://github.com/react-dnd/react-dnd/issues/347 this has a possible solution
        // https://github.com/react-dnd/react-dnd/issues/305
        // https://github.com/react-dnd/react-dnd/releases/tag/v2.0.0 breaking changes


//<Something ref={instance => connectDragSource(findDOMNode(instance))}

        return ( 

            <Cell size={6} style={styleCells} ref={instance => connectDropTarget(ReactDOM.findDOMNode(instance))}>
                    {children}xx
            </Cell> 
                
        );

        

		// return connectDropTarget(

        //     <div style={{
		// 			position: 'relative',
		// 			width: '50%',
		// 			height: '50%',
		// 		}}>

        //         <Cell size={6} style={styleCells}>
        //             {children}xx
        //         </Cell>

        //     </div>

		// )
	}
}

export default DropTarget(ItemTypes.CELL, specmethodsTargetCell, collect)(TargetCell);


         
                // style={{
				// 	position: 'relative',
				// 	//width: '100%',
                //     background: '#90a4ae', 
                //     //height: '200px'
				// }}

// <div 
// 				style={{
// 					position: 'relative',
// 					width: '100%',
// 					height: '100%',
// 				}}
// 			>
// 				<Square black={black}>{children}</Square>
// 				{isOver && !canDrop && this.renderOverlay('red')}
// 				{!isOver && canDrop && this.renderOverlay('yellow')}
// 				{isOver && canDrop && this.renderOverlay('green')}
// 			</div>,