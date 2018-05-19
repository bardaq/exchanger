//import SENDGRID_KEY from '../variables.env';
//const apiPrivat = SENDGRID_KEY,
const apiPrivat = 'apikey',
			helper = require('sendgrid').mail,
			fromEmail = new helper.Email('no-reply@example.com', 'coinBase');

export function buildAndSendEmail(receiver, sender, msg, cb){
	const toEmail = new helper.Email(receiver),
				subject = 'Project_exchange',
				content = new helper.Content(`Message from: ${sender}; \n ${msg.toString()}`),
				mail = new helper.Mail(fromEmail, subject, toEmail, content),
				sg = require('sendgrid')(apiPrivat),
				request = sg.emptyRequest({
					method: 'POST',
					path: '/v3/mail/send',
					body: mail
				});
	sg.API(request, (err, res) => {
		cb(err, res);
	});

}