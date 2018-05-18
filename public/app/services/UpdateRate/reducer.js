import{ UPDATE_RATE, UPDATE_RATE_FETCHING, UPDATE_RATE_FETCHING_ERROR} from '../../constants';

const initialState = {
	rate: "00000.00",
	rateFetching: false,
	rateFetchingError: false
}

export default function updateMethod(state = initialState, action) {

	switch (action.type) {

		case UPDATE_RATE:
			return {
				...state,
				rate: action.payload.rate,
				rateFetchingError: action.payload.rateFatchingError,
				rateFetching: action.payload.rateFatching
			}
			break;
		case UPDATE_RATE_FETCHING:
			return {
				...state,
				rateFetchingError: action.payload.rateFatchingError,
				rateFetching: action.payload.rateFatching
			}
			break;
		case UPDATE_RATE_FETCHING_ERROR:
			return {
				...state,
				rateFetchingError: action.payload.rateFetchingError,
				rateFetching: action.payload.rateFetching,
			}
			break;

		default:
			return state
	}
}

