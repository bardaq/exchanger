import { UPDATE_PHONE } from '../constants'

export const actionUpdatePhone = newPhone => {
	return { 
		type: UPDATE_PHONE, 
		payload: { phone: newPhone } 
	};
}
