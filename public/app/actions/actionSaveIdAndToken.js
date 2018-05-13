import { SAVE_ID_AND_TOKEN } from '../constants'

export const actionSaveIdAndToken = (id, token) => {
	return {
		type: SAVE_ID_AND_TOKEN,
		payload: { id: id, token: token }
	}
}