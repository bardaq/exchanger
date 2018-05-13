import React from "react";

export default class TwoFloorInfo extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		if( this.props.isBig ) { 
			return( 
				<p className='two-floor-info'>
					<span className='two-floor-info__text'>{this.props.text}</span>
					<span className='two-floor-info__big-val'>{this.props.val} {this.props.curr}</span>
				</p>
			) 
		} else {
			return( 
				<p className='two-floor-info'>
					<span className='two-floor-info__text'>{this.props.text}</span>
					<span className='two-floor-info__val'>{this.props.val} {this.props.curr}</span>
				</p> 
			) 
		}
	}
}