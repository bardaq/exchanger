import {delete_cookie} from 'sfcookies';

export function login(login, password){
	return();
}

export const logout = () => {
	delete_cookie('session');
	window.location.pathname = '/';
}