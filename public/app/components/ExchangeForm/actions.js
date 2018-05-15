import {
	UPDATE_INCOME_METHOD,
	UPDATE_OUTCOME_METHOD,
	UPDATE_RATE,UPDATE_PHONE,
	AGREE_WITH_TERMS,
	UPDATE_ACCOUNT_NUM,
	UPDATE_INCOME_AMOUNT
} from '../../constants';

export const updateAccountNum = newAccountNum  => {
	return {
		type: UPDATE_ACCOUNT_NUM,
		payload: { accountNum: newAccountNum }
	};
}

export const agreeWithTerms = () => (dispatch, getState) => {
	dispatch({
		type: AGREE_WITH_TERMS,
		payload: {
			agreeWithTerms: !getState().transactionInfoReducer.agreeWithTerms
		}
	})
};

export const updatePhone = newPhone => {
	return {
		type: UPDATE_PHONE,
		payload: { phone: newPhone }
	};
}

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

export const updateIncomeAmount = newAmount => (dispatch, getState ) => {
	dispatch({
		type: UPDATE_INCOME_AMOUNT,
		payload: {
			paymentAmount: newAmount,
			directionAmount: newAmount * getState().transactionInfoReducer.rate
		}
	});
}
