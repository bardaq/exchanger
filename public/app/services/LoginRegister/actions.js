import { SAVE_ID_AND_TOKEN } from '../../constants';
import {bake_cookie, delete_cookie} from 'sfcookies';

export const login = (id, token, phone) => {
	bake_cookie('session', {id: id, token: token, phone: phone})
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
	delete_cookie('session');
	window.location.pathname = '/';
}