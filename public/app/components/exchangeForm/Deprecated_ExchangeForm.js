import React from 'react';
import { Form, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { actionUpdateMethod, actionUpdateCurrency, actionUpdateRate, actionUpdatePaymentAmount,
	actionUpdatePaymentAmount, actionUpdateDirectionAmount, actionUpdateAccountNum,
	actionUpdateAccountNum, actionUpdatePhone, agreeWithTerms } from './actions';

import PaymentAmountInput from './PaymentAmountInput';
import DirectionAmountInput from './DirectionAmountInput';
import AccountNumInput from './AccountNumInput';
import PhoneInput from './PhoneInput';
import TermsCheck from './TermsCheck';


//import TransactionsCreator from '../../utils/transactionsCreator';
//import { createDataStamp } from '../../actions/createDataStamp';
//import { bakeTransactionCookie } from '../../actions/bakeTransactionCookie';

//import { readTransactionCookie } from '../../actions/readTransactionCookie';

class ExchangeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			paymentAmountValidation: false,
			invalidAccountNum: false,
			invalidPhone: false,
			invalidCheck: false,
			paymentAmountInputWarning: ''
		}
		this.clearValidation = this.clearValidation.bind(this);
	}

	clearValidation(property){
		this.setState({ ...this.state, [property]: false }, () => console.log(this.state))
	}

	validation(){
		let errors = {};

			if( this.props.paymentAmount < 0.0001 )
				errors = {...errors, paymentAmountValidation: true}

			if( !(!(/[_]/.test(this.props.accountNum)) && this.props.accountNum !== '' ) )
				errors = {...errors, invalidAccountNum: true}

			if( !(!(/[_]/.test(this.props.phone)) && this.props.phone !== '') )
				errors = {...errors, invalidPhone: true}

			if( !this.props.agreement )
				errors = {...errors, invalidCheck: true}

			this.setState(errors, ()=> {
				if(!this.state.paymentAmountValidation &&
					!this.state.invalidAccountNum &&
					!this.state.invalidPhone &&
					!this.state.invalidCheck
				) {
				//TransactionsCreator.create()
				}
				else { console.log('invalid. return', this.state); }

			})
	}

	// createTransaction(){
	// 	console.log('createTransaction!');
	// 	TransactionsCreator.create();
		// let promise = new Promise((resolve, reject) => {
		// 	const res = this.props.createDataStamp()
		// 	if (res) resolve("result");
		// 	else reject(new Error("ошибка в отмечатке времени при создании транзакции"));
		// });

		// promise.then(
		// 	result => {
		// 		this.props.bakeTransactionCookie();
		// 		this.props.history.push('/transaction' + this.props.dataStamp);
		// 	},
		// 	error => { alert("Rejected: " + error) }
		// );
	// }

	componentDidMount(){
		this.props.actionUpdateRate()
	}

	render() {
		return <Form className="exchangeForm">

			<PaymentAmountInput updatePaymentAmount= { this.props.actionUpdatePaymentAmount }
									paymentAmountValidation = { this.state.paymentAmountValidation}
									clearValidation = { this.clearValidation }
									isInModal = { this.props.isInModal }/>

			<DirectionAmountInput directionAmount= { this.props.directionAmount }
							actionUpdateCurrency = {this.props.actionUpdateCurrency }
							actionUpdateMethod = { this.props.actionUpdateMethod }
							actionUpdateRate = { this.props.actionUpdateRate }
							clearValidation = { this.clearValidation }/>

			<AccountNumInput updateAccountNum= { this.props.actionUpdateAccountNum }
								invalidAccountNum = { this.state.invalidAccountNum}
								clearValidation = { this.clearValidation }/>

			<PhoneInput updatePhone= { this.props.actionUpdatePhone }
							phone = { this.props.phone }
							invalidPhone = { this.state.invalidPhone}
							clearValidation = { this.clearValidation }/>

			<TermsCheck agreeWithTerms = { this.props.agreeWithTerms }
							invalidCheck = { this.state.invalidCheck}
							clearValidation = { this.clearValidation }/>

			<Button onClick={event => { this.props.isInModal ? null : this.validation() }}> Submit  </Button>
		</Form>
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({
		actionUpdateCurrency,
		actionUpdateMethod,
		actionUpdateRate,
		actionUpdatePaymentAmount,
		actionUpdateDirectionAmount,
		actionUpdateAccountNum,
		actionUpdatePhone,
		agreeWithTerms,
		//createDataStamp,
		//bakeTransactionCookie,
		//readTransactionCookie
	},dispatch);
}

export default withRouter(connect(
	state => ({
		method: state.transactionInfoReducer.method,
		paymentAmount: state.transactionInfoReducer.paymentAmount,
		directionAmount: state.transactionInfoReducer.directionAmount,
		// dataStamp: state.transactionInfoReducer.dataStamp,
		phone: state.transactionInfoReducer.phone,
		agreement: state.transactionInfoReducer.agreeWithTerms,
		accountNum : state.transactionInfoReducer.accountNum
	}),
	mapDispatchToProps
)(ExchangeForm))



