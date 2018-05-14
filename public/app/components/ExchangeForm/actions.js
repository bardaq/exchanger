import {
	UPDATE_INCOME_METHOD,
	UPDATE_OUTCOME_METHOD,
	UPDATE_RATE,
} from '../../constants';

export const getRate = () => (dispatch, getState) => {
	const pair = {
		currencyForm: getState().transactionInfoReducer.incomeCurrency,
		currencyFormType: getState().transactionInfoReducer.incomeType,
		currencyTo: getState().transactionInfoReducer.outcomeCurrency,
		currencyToType: getState().transactionInfoReducer.outcomeType,
	}
	fetch( GET_RATE_API_URL, {
		method: 'post',
		headers: {'Accept': 'application/json','Content-Type': 'application/json'},
		body: JSON.stringify(pair)
	})
	.then( res => res.json() )
	.then( data => {
		dispatch ({
			type: UPDATE_RATE,
			payload: { rate: data.rate }
		})
	});
}

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