import { Summaries } from '../models/activitySummaries';
import { createDaySummary } from '../utils';

export const init = (req, res) => {
	Summaries.remove({},(err, result) => {
		if (err) return res.status(500).send(`Can not clear summaries array: ${err}`);
	});
	const mockSummaryArray = [
		{ date: '28.02.18', activity: '1' },
		{ date: '01.03.18', activity: '2' },
		{ date: '02.03.18', activity: '6' },
		{ date: '03.03.18', activity: '12' },
		{ date: '04.03.18', activity: '4' },
		{ date: '05.03.18', activity: '9' },
		{ date: '06.03.18', activity: '12' },
		{ date: '07.03.18', activity: '30' },
	];
	Summaries.insertMany(mockSummaryArray, (err, result) => {
		console.log(result);
		if (err) return res.status(500).send(`Error while initiation summaries array: ${err}`);
		return res.status(200).send(`Summaries array inited: ${result}`);
	})
}

export const getAll = (req, res) => {
	Summaries.find({}, (err, result) => {
		if (err) return res.status(500).send(`Can not get summaries array: ${err}`);
		return res.status(200).send(result);
	})
}

export const createAndUpdateSummary = () => {
	const newSummary = new Summaries(createDaySummary());
	newSummary.save( (err, result) => {
		if (err) return console.log(`Can not update summaries array: ${err}`);
		console.log(`Summaries array updated:\n${result}\n`);
	});
}