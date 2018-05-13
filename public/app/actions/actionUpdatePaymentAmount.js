import { UPDATE_PAYMENT_AMOUNT } from '../constants'

export const actionUpdatePaymentAmount = newAmount => (dispatch, getState ) => {
	dispatch({ 
		type: UPDATE_PAYMENT_AMOUNT, 
		payload: {
			paymentAmount: newAmount,
			directionAmount: newAmount * getState().transactionInfoReducer.rate
		} 
	});
}
