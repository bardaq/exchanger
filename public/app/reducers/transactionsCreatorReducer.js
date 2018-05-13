import{ CREATE_TRANSACTION, CREATE_DATASTAMP } from '../constants';

export default function updateMethod(state = {dataStamp: 0}, action) {
	switch (action.type) {

		case CREATE_DATASTAMP:
			return {...state, dataStamp: action.payload.dataStamp};
			break;

		case CREATE_TRANSACTION:
			return state;
			break;

		default:
			return state
	}
}

