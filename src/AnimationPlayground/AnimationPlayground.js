import React, { Component } from 'react'
import { Grid, Cell } from 'react-md';
import { Button, Card, CardTitle, CardText, CardActions, FontIcon } from 'react-md';
import { Motion, spring } from 'react-motion';

const QUOTATION_MARK = "\"";

const springConfig = {
  stiffness: 340,
  damping: 88,
  precision: 0.0001
};

const getSprings = (x, y) => ({
  x: spring(x, springConfig),
  y: spring(y, springConfig)
});

// Final value of springs when the animation ends
const sprungRange = getSprings(0, 0);

// This is a function and calculates the CSS style to use during the animation
const getStyle = (x, y, zIndex) => ({
  WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
  transform: `translate3d(${x}px, ${y}px, 0)  rotate(${0}deg)`,
  position: "relative"
});

// It's where the animation starts. It starts from a relative position of y = 1000.
// It means that the elements are 1000 pixels below their final position
const start_relative_position_style = { x: 0, y: 1000, position: "relative" };

/**
 * Unlike the tutorial, export a component so it can be used on the website.
 */
export default class AnimationPlayground extends Component {
	constructor(props) {
		super(props)
	}

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
    		<Grid>
      			{[...new Array(12)].map((_, i) => 
				  <Cell key={i} size={1}>  
					<Motion defaultStyle={start_relative_position_style} style={sprungRange}>
						{(
							{ x, y } // interpolated x, y values. They are the relative position that changes dynamically as the animation runs
						) => (
						<div
							style={getStyle(x, y)}	
						>
							<Card>
								<CardTitle title={"Card" + i} subtitle="Subtitle" />
								<CardText>
									<p>
										One col cell
									</p>
								</CardText>
							</Card>
						</div>
						)}
					</Motion>
			  	</Cell>)}
			</Grid>
    		<Grid>
      			{[...new Array(3)].map((_, i) => 
				<Cell key={i} size={4}>

					<Motion defaultStyle={start_relative_position_style} style={sprungRange}>
						{(
							{ x, y } // interpolated x, y values. They are the relative position that changes dynamically as the animation runs
						) => (
						<div
							style={getStyle(x, y)}	
						>
							<Card>
								<CardTitle title={"Title " + (i + 1)} subtitle="Subtitle" />
								<CardText>
									<p>
										Four columns cell
									</p>
								</CardText>
							</Card>		
						</div>
						)}
					</Motion>				  			  
				</Cell>)}
			</Grid>
			
			<Grid>
							
				<Cell size={6}>

					<Motion defaultStyle={start_relative_position_style} style={sprungRange}>
						{(
							{ x, y } // interpolated x, y values. They are the relative position that changes dynamically as the animation runs
						) => (
						<div
							style={getStyle(x, y)}	
						>
							<Card>
								<CardTitle title={"Six col"} subtitle="Subtitle" />
								<CardText>
									<p>
										Six columns cell
									</p>
								</CardText>
							</Card>	
						</div>
						)}
					</Motion>	
							
				</Cell>
				<Cell size={4}>

					<Motion defaultStyle={start_relative_position_style} style={sprungRange}>
						{(
							{ x, y } // interpolated x, y values. They are the relative position that changes dynamically as the animation runs
						) => (
						<div
							style={getStyle(x, y)}	
						>
							<Card>
								<CardTitle title={"Four col"} subtitle="Subtitle" />
								<CardText>
									<p>
										Four columns cell
									</p>
								</CardText>
							</Card>	
						</div>
						)}
					</Motion>

				</Cell>
					
				<Cell size={2}>

					<Motion defaultStyle={start_relative_position_style} style={sprungRange}>
						{(
							{ x, y } // interpolated x, y values. They are the relative position that changes dynamically as the animation runs
						) => (
						<div
							style={getStyle(x, y)}	
						>
						<Card>
							<CardTitle title={"Two col"} subtitle="Subtitle" />
							<CardText>
								<p>
									Two columns cell
								</p>
							</CardText>
						</Card>	
						</div>
					)}
					</Motion>

				</Cell>					
				
    		</Grid>
    		
  		</div>
		)
	}
}
