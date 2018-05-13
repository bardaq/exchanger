import React from 'react';
import { InputGroup, Label, Input, InputGroupAddon, FormText } from 'reactstrap';


export default class PaymentAmountInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			warning: ''
		}
	}

	onChangeHandler(e){
		this.props.invalidPaymentAmount ? this.props.clearValidation('invalidPaymentAmount') : null;
		const val = e.target.value;
		if (val == '' || !/[a-zA-Z]/.test(val)) {
			this.setState({value: val}, (val) =>{
				if( this.props.isInModal ){
					val !== 0 ? this.setState({warning: 'На вашем балансе нет такой суммы.'}) : null;
				}
			})
			this.props.updatePaymentAmount(val)
		}
	}

	render() {
		return (<InputGroup size="lg" className={ this.props.invalidPaymentAmount ? 'hasError' : ''} >
			<Label for="paymentAmountInput">Отдаете</Label>

			<Input id="paymentAmount"
					className='paymentAmountInput'
					type="text" name="paymentAmountInput" placeholder="0.00" maxLength="14"
					value= { this.state.value }
					onChange={ e => this.onChangeHandler(e) }
			/>

			<InputGroupAddon addonType="append">BTC</InputGroupAddon>
			<FormText color="muted">{this.state.warning}</FormText>
		</InputGroup>)
	}
}

