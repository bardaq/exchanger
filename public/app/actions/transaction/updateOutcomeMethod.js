import { UPDATE_OUTCOME_METHOD } from '../../constants'

export const updateOutcomeMethod = (newMethod, newCurrency, newType) => {
	return {
		type: UPDATE_OUTCOME_METHOD,
		payload: {
			method: newMethod,
			currency: newCurrency,
			type: newType
		}
	}
}