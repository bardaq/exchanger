import {delete_cookie} from 'sfcookies';
export const logout = () => {
	delete_cookie('session');
	window.location.pathname = '/';
}