import { UPDATE_ACCOUNT_NUM } from '../constants'

export const actionUpdateAccountNum = newAccountNum  => {
	return { 
		type: UPDATE_ACCOUNT_NUM, 
		payload: { accountNum: newAccountNum }
	};
}