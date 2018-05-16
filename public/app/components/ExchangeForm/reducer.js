import{
	UPDATE_INCOME_AMOUNT, UPDATE_INCOME_METHOD, UPDATE_OUTCOME_AMOUNT, UPDATE_OUTCOME_METHOD,
	UPDATE_PHONE, UPDATE_ACCOUNT_NUM, AGREE_WITH_TERMS,
	UPDATE_RATE, UPDATE_RATE_FETCHING, UPDATE_RATE_FETCHING_ERROR
	//CREATE_TRANSACTION, CREATE_DATASTAMP
} from '../../constants';
import { directions } from '../../config';

const initialState = {
	incomeAmount: 0,
	incomeMethod: directions.in[0].name,
	incomeCurrency: directions.in[0].currency,
	incomeType: directions.in[0].type,
	wallet: directions.in[0].wallet,

	outcomeAmount: 0,
	outcomeMethod: directions.out[0].name,
	outcomeCurrency: directions.out[0].currency,
	outcomeType: directions.out[0].type,

	accountNum: '',
	phone: '',
	agreeWithTerms: false,

	rate: "00000.00",
	rateFetching: false,
	rateFetchingError: false,
	dataStamp: 0
}

export default function updateMethod(state = initialState, action) {

	switch (action.type) {

		//INCOME
		case UPDATE_INCOME_AMOUNT:
			return {
				...state,
				incomeAmount: action.payload.incomeAmount,
				outcomeAmount: action.payload.outcomeAmount }
				break;
		case UPDATE_INCOME_METHOD:
			return {
				...state,
				incomeMethod: action.payload.method,
				incomeCurrency: action.payload.currency,
				incomeType: action.payload.type
			}; break;

		//OUTCOME
		case UPDATE_OUTCOME_AMOUNT:
			return {
				...state,
				outcomeAmount: action.payload.outcomeAmount,
				incomeAmount: action.payload.incomeAmount }
				break;
		case UPDATE_OUTCOME_METHOD:
			return {
				...state,
				outcomeMethod: action.payload.method,
				outcomeCurrency: action.payload.currency,
				outcomeType: action.payload.type
			}; break;

		//TRANSACTION INFO
		case UPDATE_PHONE:
			return { ...state, phone: action.payload.phone }
			break;
		case UPDATE_ACCOUNT_NUM:
			return { ...state, accountNum: action.payload.accountNum }
			break;
		case AGREE_WITH_TERMS:
			return { ...state, agreeWithTerms: action.payload.agreeWithTerms }
			break;

		//SERVICES
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
		// case CREATE_DATASTAMP:
		// 	return {...state, dataStamp: action.payload.dataStamp};
		// 	break;
		// case CREATE_TRANSACTION:
		// 	return state;
		// 	break;

		default:
			return state
	}
}

