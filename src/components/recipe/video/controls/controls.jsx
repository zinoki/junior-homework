import React, { Component } from 'react';

import "./controls.css";

class ControlModule extends Component {
	render() {
		let {played, mouseDown, change, mouseUp, loaded} = this.props;
		return (
			<div className="progress-container">
				<input
					type='range' min={0} max={1} step='any'
					value={played}
					onMouseDown={mouseDown}
					onChange={change}
					onMouseUp={mouseUp}
				/>
				<progress className='played' max={1} value={played} />
				<progress className='video-load' max={1} value={loaded} />
			</div>
		);
	}
}

export default ControlModule;