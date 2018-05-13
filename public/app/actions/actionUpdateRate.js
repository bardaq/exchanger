import { UPDATE_RATE } from '../constants'

export const actionUpdateRate = () => (dispatch, getState) => {
	const currency = getState().transactionInfoReducer.currency;
	let rate = 0;

	fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert='+currency, { method: 'GET' })
		.then( response => response.json())
		.then( json => {
				switch (currency){
					case 'usd':
						rate = parseFloat(json[0].price_usd).toFixed(2); break;
					case 'rub':
						rate = parseFloat(json[0].price_rub).toFixed(2); break;
					case 'uah':
						rate = parseFloat(json[0].price_uah).toFixed(2); break;
				}
		})
		.then( () => {
			dispatch ({
				type: UPDATE_RATE,
				payload: { rate: parseFloat(rate).toFixed(2) }
			})
		})
}
