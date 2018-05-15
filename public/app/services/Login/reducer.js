import{ SAVE_ID_AND_TOKEN, DELETE_ID_AND_TOKEN } from '../../constants';

const initialState = {
	id: null,
	token: null
}

export default function updateMethod(state = initialState, action) {
	switch (action.type) {
		case SAVE_ID_AND_TOKEN:
			return {
				...state,
				id: action.payload.id,
				token: action.payload.token
			}; break;

		case DELETE_ID_AND_TOKEN:
			return state = {};
			break;

		default:
			return state
	}
}

