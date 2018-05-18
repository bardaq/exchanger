import React from "react";

export default class TwoFloorInfo extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		if( this.props.isBig ) {
			return(
				<p className='two-row-value'>
					<span className='two-row-value_text'>{this.props.text}</span>
					<span className='two-row-value__big-val'>{this.props.val} {this.props.curr}</span>
				</p>
			)
		} else {
			return(
				<p className='two-row-value'>
					<span className='two-row-value_text'>{this.props.text}</span>
					<span className='two-row-value__val'>{this.props.val} {this.props.curr}</span>
				</p>
			)
		}
	}
}