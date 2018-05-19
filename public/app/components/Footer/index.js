import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { actionToogleModal } from '../Modals/actions';
import { Link } from "react-router-dom";
import { Container, Row, NavItem, NavLink } from 'reactstrap';


let Footer = props => {
	return (<section id="footer" className="footer">
		<Container>
			<Row className="justify-content-center">
				<NavLink onClick={ ()=>props.actionToogleModal("contacts") }>Контакты</NavLink>
				<NavLink to='/terms'>Правила и условия</NavLink>
				<NavLink onClick={ ()=>props.actionToogleModal("login")}>Вход</NavLink>
				<NavLink onClick={ ()=>props.actionToogleModal("register")}>Регистрация</NavLink>
			</Row>
		</Container>
	</section>)
}


export default connect( null, dispatch => {
  return bindActionCreators({actionToogleModal},dispatch);
})(Footer)
