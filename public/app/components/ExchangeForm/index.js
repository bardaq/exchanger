import React from 'react';
import { Form, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';

//import PaymentAmountInput from '../components/exchangeForm/PaymentAmountInput';
//import DirectionAmountInput from '../components/exchangeForm/DirectionAmountInput';
import PaymentIncome from './PaymentIncome';
import PaymentOutcome from './PaymentOutcome';
import AccountNumInput from './AccountNumInput';
import PhoneInput from './PhoneInput';
import TermsCheck from './TermsCheck';

// import { actionUpdateMethod } from '../actions/actionUpdateMethod';
import { updateIncomeMethod, updateOutcomeMethod, getRate } from './actions';
// import { actionUpdateCurrency } from '../actions/actionUpdateCurrency';
// import { actionUpdateRate } from '../actions/actionUpdateRate';
// import { actionUpdatePaymentAmount } from '../actions/actionUpdatePaymentAmount';
// import { actionUpdateDirectionAmount } from '../actions/actionUpdateDirectionAmount';
// import { actionUpdateAccountNum } from '../actions/actionUpdateAccountNum';
// import { actionUpdatePhone } from '../actions/actionUpdatePhone';
// import { agreeWithTerms } from '../actions/agreeWithTerms';
// import { createDataStamp } from '../actions/createDataStamp';
// import { actionCreateTransaction  } from '../actions/actionCreateTransaction';

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
				incomeAmount = { this.props.transactionInfo.incomeAmount }
				updateIncomeMethod = { this.props.updateIncomeMethod }
				getRate = { this.props.getRate }
									// invalidPaymentAmount = { this.state.invalidPaymentAmount}
									// clearValidation = { this.clearValidation }
									// isInModal = { this.props.isInModal }
			/>
			<PaymentOutcome
				outcomeMethod = { this.props.transactionInfo.outcomeMethod }
				outcomeAmount = { this.props.transactionInfo.outcomeAmount }
				updateOutcomeMethod = { this.props.updateOutcomeMethod }
				getRate = { this.props.getRate }
									// invalidPaymentAmount = { this.state.invalidPaymentAmount}
									// clearValidation = { this.clearValidation }
									// isInModal = { this.props.isInModal }
			/>
			<AccountNumInput />
			<PhoneInput />
			<TermsCheck />

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
		// actionUpdatePaymentAmount,
		// actionUpdateDirectionAmount,
		// actionUpdateAccountNum,
		// actionUpdatePhone,
		// agreeWithTerms,
		// createDataStamp,
		// actionCreateTransaction
	}, dispatch);
}

export default withRouter(connect(
	state => ({
		transactionInfo: state.transactionInfoReducer,
		// directionAmount: state.transactionInfoReducer.directionAmount,
		// phone: state.transactionInfoReducer.phone,
		// method: state.transactionInfoReducer.method,
		// dataStamp: state.transactionsCreatorReducer.dataStamp
	}),
	mapDispatchToProps
)(ExchangeForm))



			// <DirectionAmountInput directionAmount= { this.props.directionAmount }
			// 				method = {this.props.method}
			// 				actionUpdateCurrency = {this.props.actionUpdateCurrency }
			// 				actionUpdateMethod = { this.props.actionUpdateMethod }
			// 				actionUpdateRate = { this.props.actionUpdateRate }
			// 				clearValidation = { this.clearValidation }/>

			// <AccountNumInput updateAccountNum= { this.props.actionUpdateAccountNum }
			// 					invalidAccountNum = { this.state.invalidAccountNum}
			// 					clearValidation = { this.clearValidation }/>

			// <PhoneInput updatePhone= { this.props.actionUpdatePhone }
			// 				phone = { this.props.phone }
			// 				invalidPhone = { this.state.invalidPhone }
			// 				clearValidation = { this.clearValidation }/>

			// <TermsCheck agreeWithTerms = { this.props.agreeWithTerms }
			// 				invalidCheck = { this.state.invalidCheck}
			// 				clearValidation = { this.clearValidation }/>