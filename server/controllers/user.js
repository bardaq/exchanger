import { User } from '../models/user';

export const login = (req, res) => {
	User.findOne({ phone: req.body.phone }, (err, result) => {
		if (err || !result) return res.status(400).end('User do not exist.');
		if( result.password === req.body.password ){
			User.findByIdAndUpdate( result.id, { "token": Date.now() }, {new: true}, (err, user) => {
				err
				? res.status(500).send(`Unable to create token. Error: ${err}`)
				: res.status(200).send(`{"id": "${user._id}", "token": "${user.token}"}`);
			})
		} else return res.status(401).send('Incorrect password');
	})
}

export const logout = (req, res) => {
	User.findByIdAndUpdate( req.body.id, { "token": '' }, (err, user) => {
		err ? res.status(500).send(`Error: ${err}`) : res.status(200).send(`User has logged out`);
	})
}

export const register = (req, res) => {
	const user = new User({
		phone: req.body.phone,
		password: req.body.password,
		token: ''
	});

	User.findOne({ phone: req.body.phone }).exec()
	.then( doc => {
		if(doc) {
			res.status(401).end(`{"errorMessage": "Такой пользователь уже существует"}`)
		} else {
			user.save((err, user) => {
				if (err) { return res.status(500).end( `{"errorMessage": "User not registered. Error: ${err}"}` )}
				else { return res.status(200).send(`{"message": "User registered"}`)}
			})
		}
	})
}

export const getAll = (req, res) => {
	User.find({}, (err, users) => {
		if (err) return res.status(500).send(`can not get list of all users. Error: ${err}`);
		return res.status(200).send(users);
	});
}

export const deleteUser = (req, res) => {
	User.deleteOne({ _id: req.params.id}, (err, result) => {
		if (err) return res.status(500).send(`Can not delete user. Error: ${err}`);
		return res.status(200).send(`User deleted. Result: ${result}`);
	})
}

export const isLogged = (req, res) => {
	// console.log('Islogged receaive req:',req.body);
	User.findById( req.body.id, (err, doc) => {
		if (err) return res.status(500).end(`Error while token validation: ${err}`);
		if(doc){
			if( req.body.token == doc.token ) return res.status(200).send(`token valid.`);
		} else return res.status(401).send(`Invalid token.`);
	});
}
