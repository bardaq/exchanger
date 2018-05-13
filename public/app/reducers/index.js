import { combineReducers } from 'redux';
import transactionInfoReducer from './transactionInfoReducer';
import transactionsCreatorReducer from './transactionsCreatorReducer';
import modalsReducer from './modalsReducer';
import userReducer from './userReducer';

export default combineReducers({
	transactionInfoReducer,
	transactionsCreatorReducer,
	modalsReducer,
	userReducer
})