// -------------- URL'S ------------------------//
export const CREATE_TRANSACTION_API_URL = 'http://dexchanger.tk/createTransaction',
						GET_RATE_API_URL = 'http://dexchanger.tk/getRate',
						REGISTER_API_URL = 'http://dexchanger.tk/register',
						LOGIN_API_URL = 'http://dexchanger.tk/login',
						CHECK_TOKEN_API_URL = 'http://dexchanger.tk/isLogged',
						GET_ACTIVITY_SUMMARIES_API_URL = 'http://dexchanger.tk/getActivitySummaries',
						GET_CONFIG_API_URL = 'http://dexchanger.tk/getConfig',
						BTC = 'BTC', ETH = 'ETH', LTC = 'LTC', XMR = 'XMR', XRP = 'XRP',
						DASH = 'DASH', UAH = 'UAH', RUB = 'RUB', KZT = 'KZT', BYN = 'BYN', USD = 'USD';

export const directions = {
	in: [
		{
			name: 'Bitcoin',
			type: 'coin',
			currency: BTC,
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Etherium',
			type: 'coin',
			currency: ETH,
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'LiteCoin',
			type: 'coin',
			currency: LTC,
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Monero',
			type: 'coin',
			currency: XMR,
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Ripple',
			type: 'coin',
			currency: XRP,
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Dash',
			type: 'coin',
			currency: DASH,
			wallet: 'adfasd131231j2h3fh4hg13134jnk'
		},
		{
			name: 'Гривня',
			type: 'fiat',
			currency: UAH,
			wallet: '1234 1234 1234 1234'
		},
		{
			name: 'Рубли',
			type: 'fiat',
			currency: RUB,
			wallet: '1234 1234 1234 1234'
		}
	],
	out: [
		{
			name: 'Гривня',
			type: 'fiat',
			currency: UAH,
			wallet: '1234 1234 1234 1234',
			fee: 4
		},
		{
			name: 'Рубли',
			type: 'fiat',
			currency: RUB,
			wallet: '1234 1234 1234 1234',
			fee: 4
		},
		{
			name: 'Bitcoin',
			type: 'coin',
			currency: BTC,
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Etherium',
			type: 'coin',
			currency: ETH,
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Liteoin',
			type: 'coin',
			currency: LTC,
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Monero',
			type: 'coin',
			currency: XMR,
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Ripple',
			type: 'coin',
			currency: XRP,
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		},
		{
			name: 'Dash',
			type: 'coin',
			currency: DASH,
			wallet: 'adfasd131231j2h3fh4hg13134jnk',
			fee: 4
		}
	],
}