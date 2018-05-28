import { CREATE_TRANSACTION, CREATE_DATASTAMP} from '../../constants';
import { CREATE_TRANSACTION_API_URL } from '../../config';

export const createTransaction = transaction => (dispatch, getState) => {
	fetch( CREATE_TRANSACTION_API_URL, {
		method: 'post',
		//headers: {'Accept': 'application/json','Content-Type': 'application/json'},
		body: JSON.stringify(transaction)
	})
	// .then( res => res.ok ? res.json() : console.log('Error, transaction have not created.'))
	// .then( data => console.log('Transaction successfully created:', data));
}

export const createDataStamp = ()  => {
	return {
		type: CREATE_DATASTAMP,
		payload: { dataStamp: Date.now() }
	}
}