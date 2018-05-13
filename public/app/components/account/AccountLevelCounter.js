import React from "react";
import { connect } from 'react-redux';

export default class AccountLevelCounter extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return <div id="circleCounterCointainer" className="circleCounterCointainer">
			<svg width="100%" viewBox="0 0 100 100" className="circleCounter">
				<circle cx="50" cy="50" r="48" fill="none" stroke="#e6e6e6" strokeWidth="2" />
				<circle cx="50" cy="50" r="48" fill="none" stroke="#0053FB" strokeWidth="2" className="circleCounterProgress"
					strokeDasharray="301" strokeDashoffset={ this.props.progress * -3.1 }
				/>
			</svg>
			<p className="CircleCounterValue"> 
				<span className="CircleCounterCurrentRate">{this.props.progress}%</span> 
				<br/>Уровень 1
			</p>
		</div>
	}
}