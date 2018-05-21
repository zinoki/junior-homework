import React, { Component } from 'react';

import VideoComponent from './video/video.jsx';
import StepsComponent from './steps/steps.jsx';

import "./recipe.css";

class RecipeComponent extends Component {

	render() {
		let recipe = this.props.recipe.fields;
		let steps = {steps: recipe.recipeJSON[0].steps, ingredients: recipe.recipeJSON[0].ingredients};
		let video = {videoUrl: recipe.landscapeAsset.fields.mp4Renditions[recipe.landscapeAsset.fields.mp4Renditions.length - 1].url, title: recipe.title, description: recipe.description, steps: steps.steps};
		return (
			<main className='recipe-container'>
				<VideoComponent video={video} />
				<StepsComponent steps={steps} />
			</main>
		);
	}
}

export default RecipeComponent;

