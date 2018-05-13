import React from 'react';
import TwoFloorInfo from '../TwoFloorInfo';
// import { Container, Row, Col } from 'reactstrap';

export default class TransactionWillReceiveBlock extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return ( <div className='transaction-info-block'>
			<TwoFloorInfo isBig val={this.props.paymentAmount}  curr={this.props.currency}  text='Получаете' />
			<TwoFloorInfo val={this.props.accountNum}  text='На счет:' />
			<img src='' />
		</div>)
	}
}