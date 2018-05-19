import { DELETE_ID_AND_TOKEN, SAVE_ID_AND_TOKEN } from '../../constants';

export const actionDeleteIdAndToken = () => {
	return { type: DELETE_ID_AND_TOKEN }
}

export const actionSaveIdAndToken = (id, token) => {
	return {
		type: SAVE_ID_AND_TOKEN,
		payload: { id: id, token: token }
	}
}