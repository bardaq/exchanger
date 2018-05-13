import { AGREE_WITH_TERMS } from '../constants'

export const agreeWithTerms = () => (dispatch, getState) => {
	dispatch({ 
		type: AGREE_WITH_TERMS, 
		payload: {
			agreeWithTerms: !getState().transactionInfoReducer.agreeWithTerms
		}
	})
};