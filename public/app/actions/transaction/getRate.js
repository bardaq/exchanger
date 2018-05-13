import { UPDATE_RATE } from '../../constants';
import { GET_RATE_API_URL } from '../../config';

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