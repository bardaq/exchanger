// -------------- URL'S ------------------------//
export const CREATE_TRANSACTION_API_URL = 'http://localhost:3000/createTransaction',
							GET_RATE_API_URL = 'http://localhost:3000/getRate',
							REGISTER_API_URL = 'http://localhost:3000/register',
							LOGIN_API_URL = 'http://localhost:3000/login',
							CHECK_TOKEN_API_URL = 'http://localhost:3000/isLogged',
							GET_ACTIVITY_SUMMARIES_API_URL = 'http://localhost:3000/getActivitySummaries',
							GET_CONFIG_API_URL = 'http://localhost:3000/getConfig';

export const directions = {
	in: [
		{
			name: 'Bitcoin',
			type: 'coin',
			currency: 'Bitcoin',
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Etherium',
			type: 'coin',
			currency: 'Etherium',
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'LiteCoin',
			type: 'coin',
			currency: 'LiteCoin',
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Monero',
			type: 'coin',
			currency: 'Monero',
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Ripple',
			type: 'coin',
			currency: 'Ripple',
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Dash',
			type: 'coin',
			currency: 'dash',
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Гривня',
			type: 'fiat',
			currency: 'uah',
			wallet: '1234 1234 1234 1234'
		},
		{
			name: 'Рубли',
			type: 'fiat',
			currency: 'rub',
			wallet: '1234 1234 1234 1234'
		},
		{
			name: 'Тенге',
			type: 'fiat',
			currency: 'kzt',
			wallet: '1234 1234 1234 1234'
		},
		{
			name: 'Белорусские рубли',
			type: 'fiat',
			currency: 'byn',
			wallet: '1234 1234 1234 1234'
		}
	],
	out: [
		{
			name: 'Гривня',
			type: 'fiat',
			currency: 'uah',
			wallet: '1234 1234 1234 1234',
			fee: 4
		},
		{
			name: 'Рубли',
			type: 'fiat',
			currency: 'rub',
			wallet: '1234 1234 1234 1234',
			fee: 4
		},
		{
			name: 'Тенге',
			type: 'fiat',
			currency: 'kzt',
			wallet: '1234 1234 1234 1234',
			fee: 4
		},
		{
			name: 'Белорусские рубли',
			type: 'fiat',
			currency: 'byn',
			wallet: '1234 1234 1234 1234',
			fee: 4
		},
		{
			name: 'Bitcoin',
			type: 'coin',
			currency: 'Bitcoin',
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Etherium',
			type: 'coin',
			currency: 'Etherium',
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Liteoin',
			type: 'coin',
			currency: 'Liteoin',
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Monero',
			type: 'coin',
			currency: 'Monero',
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Ripple',
			type: 'coin',
			currency: 'Ripple',
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Dash',
			type: 'coin',
			currency: 'dash',
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		}
	],
}

// let config = '';

// export const getConfig = cb => {
// 	if(!config) {
// 		fetch( GET_CONFIG_API_URL, {method: 'get'})
// 		.then( res => res.json() )
// 		.then( data => config = data )
// 		.then( () => { return cb(config) });
// 	} else { return cb(config) };

// }