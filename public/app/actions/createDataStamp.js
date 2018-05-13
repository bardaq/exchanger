import { CREATE_DATASTAMP } from '../constants'

export const createDataStamp = ()  => {
	return {
		type: CREATE_DATASTAMP,
		payload: { dataStamp: Date.now() }
	}
}