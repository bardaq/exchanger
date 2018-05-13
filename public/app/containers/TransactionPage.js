import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import RootModal from "../components/modals/RootModal";
import Navigation from "../components//Navigation";
import Footer from "../components/Footer.react.js";
import TransactionInfoBlock from "../components/transactionPage/TransactionInfoBlock";
import TransactionNeedSendBlock from "../components/transactionPage/TransactionNeedSendBlock";
import TransactionWillReceiveBlock from "../components/transactionPage/TransactionWillReceiveBlock";
import { read_cookie } from 'sfcookies';

export default class TransactionPage extends React.Component {
	constructor(props){
		super(props)
		this.transaction = {}
	}

	componentWillMount(){
		this.transaction = read_cookie('transaction');
	}

	render(){
		return (<div className='transaction-page'>
			<RootModal />
			<Navigation />
			<Container>
				<Row><Col>ID транзакции: {this.transaction.dataStamp}</Col></Row>
				<Row>
					<Col xs={12} md={7}>
						<TransactionInfoBlock
							dataStamp={this.transaction.dataStamp}
							directionAmount={this.transaction.directionAmount}
							paymentAmount= {this.transaction.paymentAmount}
							currency= {this.transaction.currency}
							rate= {this.transaction.rate}
							accountNum= {this.transaction.accountNum}
							burnCookie = { this.transaction.burnTransactionCookie }
						/>
					</Col>
					<Col xs={12} md={5}>
						<TransactionNeedSendBlock  directionAmount={this.transaction.directionAmount}/>
						<TransactionWillReceiveBlock
							paymentAmount= {this.transaction.paymentAmount}
							currency= {this.transaction.currency}
							accountNum= {this.transaction.accountNum}
						/>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>)
	}
}