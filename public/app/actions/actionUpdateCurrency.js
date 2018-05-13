import { UPDATE_CURRENCY } from '../constants'

export const actionUpdateCurrency = newCurrency  => {
	return { 
		type: UPDATE_CURRENCY, 
		payload: { currency: newCurrency }
	};
}