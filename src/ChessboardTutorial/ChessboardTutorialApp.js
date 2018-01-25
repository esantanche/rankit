import React, { Component } from 'react'
import Board from './Board'
import { observe } from './Game'
import { Button, FontIcon, Grid, Cell, Card, CardText, CardActions } from 'react-md';

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
				<Grid>
                    <Cell size={12}>
						
						<CardActions centered={true}>
							<Button raised primary iconEl={<FontIcon>home</FontIcon>} href="/">Back home</Button>
						</CardActions>	
					
                    </Cell>
                </Grid>

				<Grid>
					<Cell size={12}>
						<Card>
							<CardText>
									This tutorial works on Chrome. It may not work on Firefox.
							</CardText>
							<CardText>
									It illustrates creating the drag sources and the drop targets, 
									using the monitors to query the current drag state, and customizing the drag previews.
							</CardText>
							<CardActions centered={true}>

								<Button flat primary iconEl={<FontIcon style={{ width: "20px" }}>website</FontIcon>} 
											href="https://github.com/react-dnd/react-dnd/tree/master/examples/00%20Chessboard/Tutorial%20App" target="_blank">
												Browse the Source
								</Button>

							</CardActions>
						</Card>
                    </Cell>
				</Grid>

				<Grid>
					<Cell size={12}>
						<Card>
							<div style={{
									margin: 'auto',
									width: 514,
									height: 514,
									border: '1px solid gray',
								}}>
								<Board knightPosition={knightPosition} />
							</div>
						</Card>
                    </Cell>
				</Grid>
			</div>
		)
	}
}
