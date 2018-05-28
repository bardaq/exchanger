import React from 'react';
import InfoBlock from "./InfoBlock";
import NeedSendBlock from "./NeedSendBlock";
import WillReceiveBlock from "./WillReceiveBlock";
import { Container, Row, Col } from 'reactstrap';

// TODO
// fill inputs if cookies has transaction

export default class TransactionPage extends React.Component {
	constructor(props){ super(props) }
	render(){
		return (
			<Container className="transaction-info-container">
				<Row><Col> <small className="id-top">ID транзакции: {this.props.transactionInfo.dataStamp}</small></Col></Row>
				<Row>
					<Col xs={12} md={7}>
						<InfoBlock
							dataStamp={this.props.transactionInfo.dataStamp}
							incomeAmount={this.props.transactionInfo.incomeAmount}
							outcomeAmount= {this.props.transactionInfo.outcomeAmount}
							outcomeCurrency= {this.props.transactionInfo.outcomeCurrency}
							rate= {this.props.transactionInfo.rate}
							wallet= {this.props.transactionInfo.wallet}
							accountNum= {this.props.transactionInfo.accountNum}
						/>
					</Col>
					<Col xs={12} md={5}>
						<NeedSendBlock
							incomeAmount={this.props.transactionInfo.incomeAmount}
							incomeCurrency={this.props.transactionInfo.incomeCurrency}
							wallet= {this.props.transactionInfo.wallet}
						/>
						<WillReceiveBlock
							outcomeAmount= {this.props.transactionInfo.outcomeAmount}
							outcomeCurrency= {this.props.transactionInfo.outcomeCurrency}
							accountNum= {this.props.transactionInfo.accountNum}
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}