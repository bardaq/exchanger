import React from 'react';
import TwoRowValue from '../TwoRowValue';
// import { Container, Row, Col } from 'reactstrap';

export default class WillReceiveBlock extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return ( <div className='transaction-info-block'>
			<TwoRowValue isBig val={this.props.outcomeAmount}  curr={this.props.outcomeCurrency}  text='Получаете' />
			<TwoRowValue val={this.props.accountNum}  text='На счет:' />
			<img src='' />
		</div>)
	}
}