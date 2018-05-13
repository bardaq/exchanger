import React from "react";
import AccountFooter from '../components/account/AccountFooter';
import ModalLogOut from '../components/account/ModalLogOut';
import AccountNav from '../components/account/AccountNav';
import AccountContent from '../components/account/AccountContent';
import RootModal from '../components/modals/RootModal';

import { actionToogleModalIsOpen } from '../actions/actionToogleModalIsOpen';
import { actionUpdateRate } from '../actions/actionUpdateRate';
import { actionUpdateCurrency } from '../actions/actionUpdateCurrency';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { logout } from '../utils/logout';

class AccountPage extends React.Component {

	componentWillMount(){
		this.props.actionUpdateCurrency('usd');
		this.props.actionUpdateRate();
	}

	render(){ return (
		<div className="fixed-nav sticky-footer" id="page-top">
			<AccountNav
				rate= {this.props.rate}
				currency= {this.props.currency}
				logout = { logout }
			/>
			<div className="content-wrapper">
				<AccountContent actionToogleModalIsOpen={this.props.actionToogleModalIsOpen}/>
				<AccountFooter />
				<RootModal />
			</div>
		</div>
	)}
}


export default withRouter(connect(
	state => { return {
			rate: state.transactionInfoReducer.rate,
			currency: state.transactionInfoReducer.currency
	}},
	dispatch => {
		return bindActionCreators({actionToogleModalIsOpen, actionUpdateRate, actionUpdateCurrency},dispatch);
	}
)(AccountPage))