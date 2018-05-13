import React from 'react';
import TwoFloorInfo from '../TwoFloorInfo';
// import { Container, Row, Col } from 'reactstrap';

export default class TransactionNeedSendBlock extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='transaction-info-block'>
				<TwoFloorInfo isBig={true}  val={this.props.directionAmount} curr='btc' text='Отдаете' />
				<TwoFloorInfo isBig={false} val='1fC2yGG7E1f6t6boMncrCSQ2s3tBZBEcx' text='На биткоин адрес:' />
				<img src='weqw' />
			</div>
		)
	}
}
