import React from "react";
import logo from '../../static/images/logo.png';
import config from 'config';
import { 
Button,
Collapse,
Container,
Row,
Col,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem } from 'reactstrap';


let Footer = props => {
return (<section id="footer" className="footer"> 
	<Container className="d-flex flex-md-row flex-column justify-content-between">
			<NavbarBrand href="/" className="text-center"><img src={logo}/></NavbarBrand>
			<div className="d-flex flex-md-row flex-column text-center">
				<Button color="link">Контакты</Button>
				<Button color="link">Правила и условия</Button>
				<Button color="link">Вход</Button>
				<Button color="link">Регистрация</Button>
			</div>
	</Container>
</section> )
}

export default Footer