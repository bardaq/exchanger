import{
	UPDATE_CURRENCY, UPDATE_INCOME_METHOD, UPDATE_OUTCOME_METHOD,
	UPDATE_RATE, UPDATE_INCOME_AMOUNT, UPDATE_DIRECTION_AMOUNT,
	UPDATE_PHONE, UPDATE_ACCOUNT_NUM, AGREE_WITH_TERMS,
	CREATE_TRANSACTION, CREATE_DATASTAMP
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
	accountNum: directions.out[0].currency,

	phone: '',
	agreeWithTerms: false,

	//currency: defaultCurrency,
	//method: defaultMethod,
	rate: "00000.00",
	dataStamp: 0
	//paymentAmount: 0,
	//directionAmount: 0,
	// phone: '',
	// accountNum: '',
	//agreeWithTerms: false
}

export default function updateMethod(state = initialState, action) {

	switch (action.type) {

		case UPDATE_CURRENCY:
			return { ...state, currency: action.payload.currency };
			break;

		// case UPDATE_METHOD:
		// 	return { ...state, method: action.payload.method }
		// 	break;
		case UPDATE_INCOME_METHOD:
			return {
				...state,
				incomeMethod: action.payload.method,
				incomeCurrency: action.payload.currency,
				incomeType: action.payload.type
			}; break;

		case UPDATE_OUTCOME_METHOD:
			return {
				...state,
				outcomeMethod: action.payload.method,
				outcomeCurrency: action.payload.currency,
				outcomeType: action.payload.type
			}; break;

		case UPDATE_RATE:
			return { ...state, rate: action.payload.rate }
			break;

		case UPDATE_INCOME_AMOUNT:
			return {
				...state,
				paymentAmount: action.payload.paymentAmount,
				directionAmount: action.payload.directionAmount }
				break;

		case UPDATE_DIRECTION_AMOUNT:
			return {
				...state,
				paymentAmount: action.payload.paymentAmount,
				directionAmount: action.payload.directionAmount }
				break;

		case UPDATE_PHONE:
			return { ...state, phone: action.payload.phone }
			break;

		case UPDATE_ACCOUNT_NUM:
			return { ...state, accountNum: action.payload.accountNum }
			break;

		case AGREE_WITH_TERMS:
			return { ...state, agreeWithTerms: action.payload.agreeWithTerms }
			break;

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

