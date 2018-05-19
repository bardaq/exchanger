import React from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import validationAuth from '../validationAuth';
import { login, register } from '../../../services/LoginRegister';

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

	loginSubmitHandler(){
		const phone = this.state.phone,
					pwd = this.state.password,
					isValid = validationAuth(phone, pwd);
		isValid == 'valid' ? login(phone, pwd, this.warningSetter) : this.setState(isValid)
	}

	registerSubmitHandler(){
		const phone = this.state.phone,
					pwd = this.state.password,
					rpwd = this.state.repeatPassword,
					isValid = validationAuth(phone, pwd, rpwd);
		isValid == 'valid' ? register(phone, pwd, this.warningSetter) : this.setState(isValid);
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