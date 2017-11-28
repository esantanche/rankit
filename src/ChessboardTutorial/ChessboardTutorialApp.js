import React, { Component } from 'react'
import Board from './Board'
import { observe } from './Game'
import { Button, FontIcon } from 'react-md';

/**
 * Unlike the tutorial, export a component so it can be used on the website.
 */
export default class ChessboardTutorialApp extends Component {
	constructor(props) {
		super(props)
		this.unobserve = observe(this.handleChange.bind(this))
	}

	handleChange(knightPosition) {
		const nextState = { knightPosition }
		if (this.state) {
			this.setState(nextState)
		} else {
			this.state = nextState
		}
	}

	componentDidMount() {

    	document.title = "RankIt!";

  	}

	componentWillUnmount() {
		this.unobserve()
	}

	render() {
		const { knightPosition } = this.state
		//console.log('knightPosition');
		//console.log(knightPosition);

		return (
			<div>
   				<Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/">Back home</Button>

				This tutorial works on Chrome. It may not work on Firefox.

				<p>
					<b>
						<a href="https://github.com/react-dnd/react-dnd/tree/master/examples/00%20Chessboard/Tutorial%20App">
							Browse the Source
						</a>
					</b>
				</p>
				<p>
					This is a sample app you&apos;ll build as you work through the{' '}
					<a href="docs-tutorial.html">tutorial</a>.
				</p>
				<p>
					It illustrates creating the drag sources and the drop targets, using
					the monitors to query the current drag state, and customizing the drag
					previews.
				</p>
				<div style={{
					width: 514,
					height: 514,
					border: '1px solid gray',
					//display: 'inline',
					//'flex-wrap': 'wrap'
				}}>
					<Board knightPosition={knightPosition} />
				</div>
				<p>
					Make sure to check out the <a href="docs-tutorial.html">
						tutorial
					</a>{' '}
					for step-by-step instructions on building it!
				</p>
			</div>
		)
	}
}
