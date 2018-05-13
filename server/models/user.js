import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	phone: String,
	password: String,
	token: String
});

export const User = mongoose.model('User', userSchema);