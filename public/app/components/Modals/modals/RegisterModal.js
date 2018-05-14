import React from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	InputGroup,
	Label,
	Input,
	DropdownItem,
	Button
} from 'reactstrap';
import MaskedInput from 'react-maskedinput';

export default class LoginRegisterModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mask: '+11 (111) 111 11 11',
			invalidPhone: false,
			invalidPassword: false,
			passwordsDissmatch: false
		}
	}

	render(){
		return(<div className="modal-wrapper">
			<Container>
				<Row>
					<Col xs="12" md={{size: 6, offset: 3}} className="modalBlock">
						<button className="close" onClick={ () => this.props.toogleModal(null) }>&times;</button>
						<Row>
							<Col>
								<Form className="exchangeForm">
									<h2>Регистрация</h2>

									<InputGroup size="lg" className={ this.state.invalidPhone ? 'hasError' : ''}>
										<Label for="phoneInput">Телефон</Label>
										<MaskedInput id="phoneInputModal" className="phoneInput " maxLength="18" mask={this.state.mask}
											onChange = { e => {
												this.props.inputHandler('phone', e.target.value);
												if(this.props.phone === '+7_ (___) ___ __ __') this.setState({mask: '+1 (111) 111 11 11'})
											}}/>
									</InputGroup>

									<InputGroup size="lg" className={ this.state.invalidPassword ? 'hasError' : ''}>
										<Label for="passwordInput">Пароль</Label>
										<Input id="passwordInput" className="passwordInput" type="password" placeholder="ваш пароль" maxLength="18"
											onChange = { e => this.props.inputHandler('password', e.target.value) } />
									</InputGroup>

									<InputGroup size="lg" className={ this.state.passwordsDissmatch ? 'hasError' : ''}>
										<Label for="passwordInput">Повторите пароль</Label>
										<Input id="repeatPasswordInput" className="repeatPasswordInput" type="password" placeholder="Повторите пароль" maxLength="18"
											onChange = { e => this.props.inputHandler('repeatPassword', e.target.value) } />
									</InputGroup>

									<p id='warningMessage' className='warningMessage'>{this.props.warningMessage}</p>

									<Button onClick = { e => this.props.registerSubmitHandler(e) }>Submit</Button>

									<p><small>Уже зарегистрированы? <a href='#' onClick={ () => this.props.registerOrLoginToogler('login') }>Войти</a></small></p>
								</Form>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>)
	}
}
