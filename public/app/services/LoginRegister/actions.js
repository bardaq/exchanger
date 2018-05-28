import { SAVE_ID_AND_TOKEN } from '../../constants';
import cookie from 'react-cookies';

export const login = (id, token, phone) => {
	cookie.save('session', {id: id, token: token, phone: phone})
	return{
	  type: SAVE_ID_AND_TOKEN,
	  payload: {
	    id: id,
	    token: token,
	    phone: phone
	  }
	};
}

export const logout = () => {
	deleteCookie('session');
	window.location.pathname = '/';
}