import { combineReducers } from 'redux';
import exchangeReducer from './components/ExchangeForm/reducer';
import transactionsCreatorReducer from './services/CreateTransaction/reducer';
import modalsReducer from './components/Modals/reducer';
import userReducer from './services/Login/reducer';

export default combineReducers({
	exchangeReducer,
	transactionsCreatorReducer,
	modalsReducer,
	userReducer
})