import express from 'express';
import bodyParser from 'body-parser';
import db from './db';

import * as User from './controllers/user';
import * as Transaction from './controllers/transactions';
import * as Summaries from './controllers/activitySummaries';
import { cronTasks } from './cron/cron';
// import { sendContactEmail } from './controllers/emailSender';

const app = express();
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('/sendEmail', sendContactEmail);
app.post('/register', User.register);
app.get('/getAllUsers', User.getAll);
app.delete('/deleteUser/:id', User.deleteUser);
app.post('/login', User.login);
app.post('/logout', User.logout);
app.post('/isLogged', User.isLogged);

app.post('/getRate', Transaction.getRate);
app.get('/getAllTransaction', Transaction.getAll);
app.post('/createTransaction', Transaction.create);

app.get('/initActivitySummaries', Summaries.init);
app.get('/getActivitySummaries', Summaries.getAll);

app.listen(3000, () => console.log('server started'));

