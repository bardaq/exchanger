import { UPDATE_DIRECTION_AMOUNT } from '../constants'

export const actionUpdateDirectionAmount = newAmount => (dispatch, getState ) => {
	dispatch({ 
		type: UPDATE_DIRECTION_AMOUNT, 
		payload: {
			directionAmount: newAmount,
			paymentAmount: newAmount / getState().transactionInfoReducer.rate
		} 
	});
}
