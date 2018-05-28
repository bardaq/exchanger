import React from 'react';
import RootModal from "../components/Modals";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TransactionInfoBlock from "../components/TransactionInfoBlock";
import { Container, Row, Col } from 'reactstrap';
import cookie from 'react-cookies';

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

export default class TransactionPage extends React.Component {
	render(){
		return (
			<div className='transaction-page'>
				<RootModal />
				<Navigation />
				<TransactionInfoBlock transactionInfo = {cookie.load('transaction')} />
				<Footer />
			</div>
		)}
}