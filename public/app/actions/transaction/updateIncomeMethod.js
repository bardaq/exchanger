import { UPDATE_INCOME_METHOD } from '../../constants'

export const updateIncomeMethod = (newMethod, newCurrency, newType) => {
	return {
		type: UPDATE_INCOME_METHOD,
		payload: {
			method: newMethod,
			currency: newCurrency,
			type: newType
		}
	}
}