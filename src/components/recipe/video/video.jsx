import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import ControlModule from './controls/controls.jsx';

import './video.css';

class VideoComponent extends Component {
	
	constructor(props) {
		super(props);
		this.state = { 'playing': false, 'played': 0, 'loaded': true, url: props.video.videoUrl };
	}

	playVideo = () => {
		this.setState({ playing: true });
	}

	togglePlay = () => {
		if (this.state.playing) {
			this.setState({ playing: false });
			document.getElementById("myButton").className = "play";
		} else {
			this.setState({ playing: true });
			document.getElementById("myButton").className = "pause";
		}
	}

	stopVideo = () => {
		this.setState({ playing: false });
	}

	onSeekMouseDown = e => {
		this.setState({ seeking: true })
	}

	onSeekChange = e => {
		this.setState({ played: parseFloat(e.target.value) })
	}

	onSeekMouseUp = e => {
		this.setState({ seeking: false })
		this.refs.player.seekTo(parseFloat(e.target.value))
	}

	onProgress = state => {
		if (!this.state.seeking) {
			this.setState(state)
		}
	}

	render() {
		const {video} = this.props;
		const title = video.title;
		const description = video.description;

		return (
			<div className="video-container">
				<h1>{title}</h1>
				<div className='subtitle'>{description}</div>
				<ReactPlayer
					ref='player'
					url={this.state.url}
					playing={this.state.playing}
					width={'100%'}
					height={'auto'}
					onPlay={this.playVideo}
					onPause={this.stopVideo}
					onEnded={this.stopVideo}
					onProgress={this.onProgress}
				/>
				<div className='controls-container'>
					<div className='buttons'>
						<button id="myButton" className='play' onClick={()=> {this.togglePlay()}}></button>
					</div>
					<ControlModule
						played={this.state.played}
						loaded={this.state.loaded}
						mouseDown={this.onSeekMouseDown}
						change={this.onSeekChange}
						mouseUp={this.onSeekMouseUp} />
				</div>
			</div>
		);
	}
}

export default VideoComponent;
