import React from 'react';
import TwoRowValue from '../TwoRowValue';
import * as qrcode from 'qrcode-generator';

export default class NeedSendBlock extends React.Component {
	constructor(props){
		super(props)
	}

	createQR(m){
		const qr = qrcode(4,'H');
		qr.addData(m);
		qr.make();
		document.getElementById('qr-code-container').innerHTML = qr.createImgTag(7,4);
	}

	componentDidMount(){
		this.createQR(this.props.wallet);
	}

	render(){
		return (
			<div className='transaction-info-block'>
				<TwoRowValue isBig={true}  val={this.props.incomeAmount} curr='btc' text='Отдаете' />
				<TwoRowValue isBig={false} val={this.props.wallet} text='На биткоин адрес:' />
				<div id="qr-code-container" className="qr-code-container"> </div>
			</div>
		)
	}
}
