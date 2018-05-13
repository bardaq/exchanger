import React from "react";
import { Container, Row, Col } from 'reactstrap';
import AccountPaymentButtons from './AccountPaymentButtons'
import AccountTable from './AccountTable'


class AccountContent extends React.Component {
	render(){return (
		<div className="container px-5" >
			<AccountPaymentButtons actionToogleModalIsOpen={ this.props.actionToogleModalIsOpen }/>
			<AccountTable />
		</div>
	)}
}

export default AccountContent;