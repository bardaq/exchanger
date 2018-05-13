import React from 'react';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import validationAuth from '../utils/validationAuth';

import { LOGIN_API_URL, REGISTER_API_URL } from '../config';
import { bake_cookie } from 'sfcookies';

export default class LoginRegisterModal extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			registerOrLogin: this.props.registeOrLogin,
			phone: '',
			password: '',
			repeatPassword: '',
			warningMessage: ''
		}
		this.inputHandler = ::this.inputHandler;
		this.registerSubmitHandler = ::this.registerSubmitHandler;
		this.loginSubmitHandler = ::this.loginSubmitHandler;
		this.registerOrLoginToogler = ::this.registerOrLoginToogler;
		this.warningSetter = ::this.warningSetter;
	}

	registerOrLoginToogler(t){ this.setState({registerOrLogin: t}) }

	warningSetter(w){ this.setState({warningMessage: w}) }

	login(phone, password, warningSetter){
		fetch( LOGIN_API_URL, {
			method: 'post',
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
			body: JSON.stringify({ "phone": phone, "password": password })
		}).then( res => res.ok ? res.json() : warningSetter('Неправильный телефон или пароль'))
			.then( data => { if (data) bake_cookie('session', {id: data.id, token: data.token}) })
			.then(() => {
				this.props.toogleModal();
				window.location.pathname = `/account`;
			})
	}

	register(phone, password, warningSetter){
		fetch( REGISTER_API_URL, {
			method: 'post',
			headers: {'Accept': 'application/json','Content-Type': 'application/json'},
			body: JSON.stringify({ "phone": phone, "password": password })
		})
		.then( res => res.ok ? res.json() : warningSetter('Такой пользователь уже зарегистрирован'))
		.then( data => data ? this.login(phone, password, warningSetter) : null );
	}

	loginSubmitHandler(){
		const phone = this.state.phone,
					pwd = this.state.password,
					isValid = validationAuth(phone, pwd);
		isValid == 'valid' ? this.login(phone, pwd, this.warningSetter) : this.setState(isValid)
	}
	registerSubmitHandler(){
		const phone = this.state.phone,
					pwd = this.state.password,
					rpwd = this.state.repeatPassword,
					isValid = validationAuth(phone, pwd, rpwd);
		isValid == 'valid' ? this.register(phone, pwd, this.warningSetter) : this.setState(isValid);
	}

	inputHandler(inputName, value){ this.setState({[inputName] : value}) }

	render(){
		if (this.state.registerOrLogin === 'login') {
			return (<LoginModal
				toogleModal= {this.props.toogleModal}
				registerOrLoginToogler= {this.registerOrLoginToogler}
				phone = {this.state.phone}
				inputHandler= {this.inputHandler}
				warningMessage= {this.state.warningMessage}
				loginSubmitHandler= {this.loginSubmitHandler}
			/>)
		} else if (this.state.registerOrLogin === 'register'){
			return <RegisterModal
				phone = {this.state.phone}
				inputHandler= {this.inputHandler}
				registerSubmitHandler= {this.registerSubmitHandler}
				toogleModal= {this.props.toogleModal}
				warningMessage= {this.state.warningMessage}
				registerOrLoginToogler= {this.registerOrLoginToogler}
			/>
		} else { return null }
	}
}