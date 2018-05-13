import { UPDATE_METHOD } from '../constants'

export const actionUpdateMethod = newMethod => {
	return { type: UPDATE_METHOD, payload: { method: newMethod } };
}