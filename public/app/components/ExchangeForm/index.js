import React from 'react';
import { Form, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';

import PaymentIncome from './fields/PaymentIncome';
import PaymentOutcome from './fields/PaymentOutcome';
import AccountNumInput from './fields/AccountNumInput';
import PhoneInput from './fields/PhoneInput';
import TermsCheck from './fields/TermsCheck';
import {
	updateIncomeAmount, updateOutcomeAmount, updateIncomeMethod,
	updateOutcomeMethod, updatePhone, agreeWithTerms, updateAccountNum,
	updateRate,
} from './actions';
import { bake_cookie } from 'sfcookies';
import validateTransaction from './validateTransaction';

class ExchangeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invalidPaymentAmount: false,
			invalidAccountNum: false,
			invalidPhone: false,
			invalidCheck: false,
			paymentAmountInputWarning: ''
		}
		this.clearValidation = this.clearValidation.bind(this);
		this.errorSetter = this.errorSetter.bind(this);
	}

	errorSetter(errors){ this.setState(errors) }

	clearValidation(property){
		this.setState({ ...this.state, [property]: false })
	}

	async submit(){
		if (validateTransaction(this.props.exchangeInfo, this.errorSetter) === 'valid'){
			await this.props.createDataStamp();
			const transaction = { ...this.props.exchangeInfo, dataStamp: this.props.dataStamp };
			this.props.actionCreateTransaction( transaction );
			bake_cookie( 'transaction', transaction );
			this.props.history.push('/transaction' + this.props.dataStamp);
		} else { return console.log('invalid') }
	}

	componentDidMount(){
		this.props.updateRate();
	}

	render() {
		return <Form className="exchangeForm">
			<PaymentIncome
				incomeAmount = { this.props.exchangeInfo.incomeAmount }
				updateIncomeAmount = { this.props.updateIncomeAmount }
				incomeMethod = { this.props.exchangeInfo.incomeMethod }
				updateIncomeMethod = { this.props.updateIncomeMethod }
				updateRate = { this.props.updateRate }
			/>
			<PaymentOutcome
				incomeType = { this.props.exchangeInfo.incomeType }
				outcomeAmount = { this.props.exchangeInfo.outcomeAmount }
				updateOutcomeAmount = { this.props.updateOutcomeAmount }
				outcomeMethod = { this.props.exchangeInfo.outcomeMethod }
				updateOutcomeMethod = { this.props.updateOutcomeMethod }
				updateRate = { this.props.updateRate }
			/>
			<AccountNumInput updateAccountNum = {this.props.updateAccountNum} />
			<PhoneInput updatePhone = {this.props.updatePhone} />
			<TermsCheck agreeWithTerms = {this.props.agreeWithTerms} />

			<Button className="submit" color="primary" size="lg" onClick={	event => { this.props.isInModal ? null : this.submit() }}> Обменять <span>&#8635;</span>  </Button>
		</Form>
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		updateIncomeMethod, updateOutcomeMethod,
		updateIncomeAmount, updateOutcomeAmount,
		updateAccountNum, updatePhone, agreeWithTerms,
		updateRate
		// createDataStamp,
		// actionCreateTransaction
	}, dispatch);
}

export default withRouter(connect(
	state => ({
		exchangeInfo: state.exchangeReducer,
		// method: state.exchangeInfoReducer.method,
		// dataStamp: state.transactionsCreatorReducer.dataStamp
	}),
	mapDispatchToProps
)(ExchangeForm))

