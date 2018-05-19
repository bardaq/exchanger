import { LOGIN_API_URL, REGISTER_API_URL,  } from '../../config';
import { actionToogleModal } from '../../components/Modals/actions';
import { login as actionLogin, register as actionRegister } from './actions';
import { bake_cookie } from 'sfcookies';

export function login(phone, password, warningSetter){
	fetch( LOGIN_API_URL, {
		method: 'post',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({ "phone": phone, "password": password })
	})
	.then( res => {
		return res.ok ? res.json() : warningSetter('Неправильный телефон или пароль');
	})
	.then( data => {
		return data ? actionLogin(data.id, data.token, phone) : null;
	})
	.then( data => {
		if( data ){
			actionToogleModal();
			window.location.pathname = `/account`;
		}
	})
}

export function register(phone, password, warningSetter){
	fetch( REGISTER_API_URL, {
		method: 'post',
		headers: {'Accept': 'application/json','Content-Type': 'application/json'},
		body: JSON.stringify({ "phone": phone, "password": password })
	})
	.then( res => {
		return res.ok ? res.json() : warningSetter('Такой пользователь уже зарегистрирован')
	})
	.then( data => {
		data ? login(phone, password, warningSetter) : null
	});
}