import mongoose from 'mongoose';

const summarySchema = new mongoose.Schema({
	date: String,
	activity: Number
})

export const Summaries = mongoose.model('Summaries', summarySchema);