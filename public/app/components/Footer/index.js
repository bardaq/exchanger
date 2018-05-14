import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, NavItem, NavLink } from 'reactstrap';


let Footer = props => {
	return (<section id="footer" className="footer">
		<Container>
			<Row className="justify-content-center">
				<NavLink onClick={ ()=>this.props.actionToogleModalIsOpen("contacts") }>Контакты</NavLink>
				<Link className='nav-link' to='/terms'>Правила и условия</Link>
				<NavLink onClick={ ()=>this.props.actionToogleModalIsOpen("login")}>Вход</NavLink>
				<NavLink onClick={ ()=>this.props.actionToogleModalIsOpen("register")}>Регистрация</NavLink>
			</Row>
		</Container>
	</section>)
}

export default Footer