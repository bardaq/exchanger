import React from 'react';
import { Form, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';

import PaymentIncome from './PaymentIncome';
import PaymentOutcome from './PaymentOutcome';
import AccountNumInput from './AccountNumInput';
import PhoneInput from './PhoneInput';
import TermsCheck from './TermsCheck';

import { updateIncomeMethod, updateOutcomeMethod, getRate, updatePhone, agreeWithTerms, updateAccountNum,
updateIncomeAmount } from './actions';
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
		if (validateTransaction(this.props.transactionInfo, this.errorSetter) === 'valid'){
			await this.props.createDataStamp();
			const transaction = { ...this.props.transactionInfo, dataStamp: this.props.dataStamp };
			this.props.actionCreateTransaction( transaction );
			bake_cookie( 'transaction', transaction );
			this.props.history.push('/transaction' + this.props.dataStamp);
		} else { return console.log('invalid') }
	}

	componentDidMount(){
	//this.props.actionUpdateRate()
	}

	render() {
		return <Form className="exchangeForm">
			<PaymentIncome
				incomeMethod = { this.props.transactionInfo.incomeMethod }
				incomeAmount = { this.props.transactionInfo.updateIncomeAmount }
				updateIncomeMethod = { this.props.updateIncomeMethod }
				getRate = { this.props.getRate }
			/>
			<PaymentOutcome
				outcomeMethod = { this.props.transactionInfo.outcomeMethod }
				outcomeAmount = { this.props.transactionInfo.outcomeAmount }
				updateOutcomeMethod = { this.props.updateOutcomeMethod }
				getRate = { this.props.getRate }
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
		updateIncomeMethod,updateOutcomeMethod,
		getRate,
		// actionUpdateCurrency,
		// actionUpdateMethod,
		// actionUpdateRate,
		updateIncomeAmount,
		// actionUpdateDirectionAmount,
		updateAccountNum,
		updatePhone,
		agreeWithTerms,
		// createDataStamp,
		// actionCreateTransaction
	}, dispatch);
}

export default withRouter(connect(
	state => ({
		transactionInfo: state.exchangeReducer,
		// directionAmount: state.transactionInfoReducer.directionAmount,
		//phone: state.exchangeReducer.phone,
		// method: state.transactionInfoReducer.method,
		// dataStamp: state.transactionsCreatorReducer.dataStamp
	}),
	mapDispatchToProps
)(ExchangeForm))

