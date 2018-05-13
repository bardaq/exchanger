import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema({
	dataStamp: Number,
	phone: String,
	accountNum: String,
	paymentAmount: Number,
	directionAmount: Number,
	directionCurrency: String,
	rate: Number,
	method: String
});

export const Transaction = mongoose.model('UsTransactioner', transactionSchema);