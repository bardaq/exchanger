import { Transaction } from '../models/transactions';
//import Converter from 'money-converter';
export const getAll = (req, res, cb) => {
	Transaction.find({}, (err, result) => {
		// in case we need to invoke it getAll as func, without http request
		if( !req && !res) {
			if (err) return console.log(`Can not get transactions list. Error ${err}`);
			return cb(result);
		}
		if (err) return res.status(500).send(`Can not get transactions list. Error ${err}`);
		return res.status(200).send(result);
	})
}

export const create = (req, res) => {
	const transaction = new Transaction({
		dataStamp: req.body.dataStamp,
		paymentAmount: req.body.paymentAmount,
		directionAmount: req.body.directionAmount,
		directionCurrency: req.body.directionCurrency,
		method: req.body.method,
		rate: req.body.rate,
		phone: req.body.phone,
		accountNum: req.body.accountNum,
	});
	transaction.save((err, transaction) => {
		if (err) return res.status(500).send(`Error while creating transaction: ${err}`);
		return res.status(200).send(`Transaction created: ${transaction}`);
	})
}

export const getRate = (req, res) => {
	const currencyFrom = req.body.incomeCurrency,
		currencyFromType = req.body.incomeType,
		currencyTo = req.body.outcomeCurrency,
		currencyToType = req.body.outcomeType;
	let rate = '';
	//let currencyToRateUsd = new Converter.convert(1, {from: currencyTo, to: 'USD'});
	console.log(currencyToRateUsd);
	let currencyFromRateUsd = null;

	fetch(`https://api.coinmarketcap.com/v1/ticker/${currencyFrom}`, { method: 'GET' })
	.then( response => response.json())
	.then( json => {
		currencyFromRateUsd = json[0].price_usd;
	})

	rate = currencyFromRateUsd / currencyToRateUsd * 100;
	console.log('rate',rate);

	// if (currencyFromType === 'coin' && currencyToType === 'fiat') {
	// 	// 1 coin === x usd
	// 	// let currencyToRateUsd = currencyConverter.convert(1, currencyTo, 'USD');
	// 	// let currencyFromRateUsd = null;

	// 	// fetch(`https://api.coinmarketcap.com/v1/ticker/${currencyFrom}`, { method: 'GET' })
	// 	// .then( response => response.json())
	// 	// .then( json => {
	// 	// 	currencyFromRateUsd = json[0].price_usd;
	// 	// })

	// 	// rate = currencyFromRateUsd / currencyToRateUsd * 100;
	// 	// console.log('rate',rate);

	// 	// x usd === y fiat
	// } else if (currencyFromType === 'coin' && currencyToType === 'coin') {

	// } else if (currencyFromType === 'fiat' && currencyToType === 'coin') {

	// } else if (currencyFromType === 'fiat' && currencyToType === 'fiat') {

	// }

	res.status(200).end(`{
		"rate": ${rate}
	}`)
}