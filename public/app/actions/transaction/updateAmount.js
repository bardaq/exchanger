import { UPDATE_PAYMENT_AMOUNT } from '../constants';
import { directions } from '../config';

export const actionUpdateIncomeAmount = newAmount => (dispatch, getState ) => {
	const currency = getState().transactionInfoReducer.incomePayment_method;
	direction.in.forEach(direction, i, arr)
	dispatch({
		type: UPDATE_PAYMENT_AMOUNT,
		payload: {
			incomePayment_amount: newAmount,
			outcomePayment_amount: newAmount * directions[].rate
		}
	});
}
