import React, { Component } from 'react'
import { Grid, Cell } from 'react-md';
import { Button, Card, CardActions, FontIcon } from 'react-md';
import TargetCell from './TargetCell';
import DnDContext from './DnDContext';

const styleCells = { background: '#90a4ae', height: '200px' };

export default class DragAndDropFourCellsExperimentApp extends Component {

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
		
                <DnDContext />
                
            </div>
		)
	}
}
