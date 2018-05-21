import React from 'react';

import './steps.css';

class StepsComponent extends React.Component {

	render() {
		const ingredients = this.props.steps.ingredients;
		const steps = this.props.steps.steps ;
		return (
			<div className="steps-container">
				<div>
					<div className="col-left">
						<h2>Ingredients</h2>
						<ul className='ingredients-list'>
							{
								ingredients.map(function(ingredient, index) {
									return <li key={index}>{ingredient}</li>
								})
							}
						</ul>
					</div>
					<div className="col-right">
						<h2>Steps</h2>
						<ul className='steps-list'>
							{
								steps.map(function(step, index) {
									return <li key={index}><span>{step}</span></li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default StepsComponent;
