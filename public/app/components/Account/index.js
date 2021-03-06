import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import cookie from 'react-cookies';
export default class AccountPage extends React.Component {
	render(){
		const user = cookie.load('session');
		return (
			<Container>
				<Row>
					<Col className="text-center">
						<h1>Аккаунт</h1>
						<h6>Функция разрабатывается в данный момент. Попробуйте, пожалуйста, позже.</h6>
					</Col>
					<Col xs="12" md={{size: 6, offset: 3}}>
						<code>
							you have successfully loged in with<br/>
							id: {user.id}<br/>
							token: {user.token}<br/>
							phone: {user.phone}
						</code>
					</Col>
				</Row>
				<Row>3
					<Col className="text-center mt-5">
						<Link className='btn btn-primary' to='/'>На главную</Link>
					</Col>
				</Row>
			</Container>
		)
	}
}