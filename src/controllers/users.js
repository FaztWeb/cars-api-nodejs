const User = require('../models/user');

// we can interact with mongoose in these ways:
// 1 - callbacks
// 2 - promises
// 3 - async / await (Promises)

module.exports = {
	index: (req, res, next) => {
		User.find({})
			.then(users => {
				res.status(200).json(users);
			})
			.catch(err => {
				next(err);
			});
	},			

	newUser: (req, res, next) => {
		const newUser = new User(req.body);
		newUser.save()
			.then(user => {
				res.status(200).json(user);
			}) 
			.catch(err => {
				next(err);
			});
	}
};
