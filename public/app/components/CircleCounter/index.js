import React from "react";
import { connect } from 'react-redux';


// TODO:
// dispatch 'updateCurrecnyRate' each minute

class circleCounter extends React.Component {
	constructor(props) {
		super(props);
		this.oneTick = 301 / 60 / 100;
		this.state = {
			progress: 0,
			isReseting: false
		};
	}

	startCounter() {
		if(!this.state.isReseting ){
			this.startCounterInstance = setTimeout( () => {
				if( this.state.progress > 300 ) {
					clearTimeout(this.startCounterInstance);
					return this.resetCounter();
				}
				this.tick();
				this.startCounter();
			}, 10);
		}
	}

	tick() {
		this.setState((prevState) => {
			return {progress: prevState.progress + this.oneTick}
		})
	}

	antiTick() {
		this.setState((prevState) => {
			if(prevState.progress - this.oneTick > 0) {
				return {progress: prevState.progress - this.oneTick*100}
			}
		})
	}

	resetCounter(){
		this.setState({isReseting: true});
		this.resetCounterInstance = setTimeout( () => {
			if( this.state.progress > 2 ) {
				this.antiTick()
				this.resetCounter()
			} else {
				clearTimeout(this.resetCounterInstance);
				this.setState({isReseting: false});
				this.startCounter()
			}
		},10)
	}

	componentWillReceiveProps(newProps) {
		if( newProps.currency !== this.props.currency ) {
			this.resetCounter();
			this.startCounter();
		}
	}

	componentDidMount() {
		const counter = this.startCounter();
	}
	componentWillUnmount() {
		if(this.resetCounterInstance) clearTimeout(this.resetCounterInstance);
		if(this.startCounterInstance) clearTimeout(this.startCounterInstance);
	}

	render() {
		return <div id="circleCounterCointainer" className="circleCounterCointainer">
			<svg width="100%" viewBox="0 0 100 100" className="circleCounter">
				<circle cx="50" cy="50" r="48" fill="none" stroke="#e6e6e6" strokeWidth="2" className="circleCounterProgressBg"/>
				<circle cx="50" cy="50" r="48" className="circleCounterProgress"
					strokeDasharray="301" strokeDashoffset={this.state.progress > 0 ? this.state.progress : 0 }
				/>
			</svg>
			<p className="CircleCounterValue">
				<span className="CircleCounterCurrentRate">{this.props.rate}</span>
				<sup className="CircleCounterCurrency">{this.props.currency}</sup>
				<br/>
				<span className="circle-counter__description"> Курс обмена обновляется каждую минуту</span>
			</p>
		</div>
	}
}

function putStoreToProps(state){
	return{
		currency: state.exchangeReducer.currency,
		rate: state.exchangeReducer.rate
	}
}

export default connect(putStoreToProps)(circleCounter)