import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/projectExchange');
export const db = mongoose.connection;
db.on('error', err => console.log('error connection', err));
db.once('open', () => console.log('database connected\n\n'));
