import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RootModal from "../modals/RootModal";
import Navigation from "../container/Navigation/Navigation";
import Footer from "../Footer.react.js";
import TransactionInfoBlock from "./TransactionInfoBlock";
import TransactionNeedSendBlock from "./TransactionNeedSendBlock";
import TransactionWillReceiveBlock from "./TransactionWillReceiveBlock";

import { actionReadTransactionCookie } from "../../actions/actionReadTransactionCookie";
import { burnTransactionCookie } from "../../actions/burnTransactionCookie";

import { Container, Row, Col } from 'reactstrap';

// TODO:
// Fix warning

// burn cookie after hour
// on submit save/rewrite state in cookies on hour
// + change mock data to passed props
// + route on submit on transactionPage + id
// + add to state timespam on submit form
// + save state in cookies on 1 hour and creacte deprication func
// + create countdun 1 hour from data stamp
// + create layaut and mock data

class TransactionPage extends React.Component {
	render(){
		this.props.actionReadTransactionCookie();
		return (<div className='transaction-page'>
			<RootModal />
			<Navigation />
			<Container>
				<Row><Col>ID транзакции: {this.props.dataStamp}</Col></Row>
				<Row>
					<Col xs={12} md={7}>
						<TransactionInfoBlock
							dataStamp={this.props.dataStamp}
							directionAmount={this.props.directionAmount}
							paymentAmount= {this.props.paymentAmount}
							currency= {this.props.currency}
							rate= {this.props.rate}
							accountNum= {this.props.accountNum}
							burnCookie = { this.props.burnTransactionCookie }
						/>
					</Col>
					<Col xs={12} md={5}>
						<TransactionNeedSendBlock  directionAmount={this.props.directionAmount}/>
						<TransactionWillReceiveBlock
							paymentAmount= {this.props.paymentAmount}
							currency= {this.props.currency}
							accountNum= {this.props.accountNum}
						/>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>)
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ actionReadTransactionCookie, burnTransactionCookie },dispatch);
}
export default connect(null, mapDispatchToProps)(TransactionPage)
// function putStoreToProps(state){
// 	return{
// 		dataStamp: state.transactionInfoReducer.dataStamp,
// 		directionAmount: state.transactionInfoReducer.directionAmount,
// 		paymentAmount: state.transactionInfoReducer.paymentAmount,
// 		accountNum: state.transactionInfoReducer.accountNum,
// 		currency: state.transactionInfoReducer.currency,
// 		rate: state.transactionInfoReducer.rate
// 	}
// }
// export default connect(putStoreToProps, mapDispatchToProps)(TransactionPage)