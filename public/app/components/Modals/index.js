import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionToogleModal } from './actions';

import { Container, Row, Col } from 'reactstrap';
import ContactsModal from './modals/ContactsModal'
import LoginRegisterModal from './modals/LoginRegisterModal'
import WidthdrawalModal from './modals/WidthdrawalModal'
import FillUpBalanceModal from './modals/FillUpBalanceModal'

class Modals extends React.Component {
	constructor(props){
		super(props);
	}
	toogleModal(modalType){
		this.props.actionToogleModal(modalType)
	}

	render(){

		if(this.props.isOpen){

			switch (this.props.modalType){

				case "contacts":
					return <ContactsModal toogleModal={this.toogleModal.bind(this)}/>
					break;

				case "login":
					return <LoginRegisterModal registeOrLogin='login' toogleModal={this.toogleModal.bind(this)}/>
					break;

				case "register":
					return <LoginRegisterModal registeOrLogin='register' toogleModal={this.toogleModal.bind(this)}/>
					break;

				case "widthdrawal":
					return <WidthdrawalModal toogleModal={this.toogleModal.bind(this)}/>
					break;

				case "fillUpBalance":
					return <FillUpBalanceModal toogleModal={this.toogleModal.bind(this)}/>
					break;

				default:
				<ContactsModal />
			}
		} else { return null; }
	}
}

export default connect(
	state => ({
		isOpen: state.modalsReducer.isOpen,
		modalType: state.modalsReducer.modalType
	}),
	dispatch => {
		return bindActionCreators({actionToogleModal },dispatch);
	}
)(Modals)