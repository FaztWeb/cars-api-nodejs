const User = require('../models/user');

module.exports = {
	index: async (req, res, next) => {
		const users = await User.find({});
		// throw new Error('my dummy error');
		res.status(200).json(users);
	},

	newUser: async (req, res, next) => {
		const newUser = new User(req.body);
		const user = await newUser.save();
		res.status(201).json(user);
	},

	getUser: async (req, res, next) => {
		const { userId } = req.params;
		const user = await User.findById(userId);
		res.status(200).json(user);
	},

	replaceUser: async (req, res, next) => {
		const { userId } = req.params;
		const newUser = req.body;
		const oldUser = await User.findByIdAndUpdate(userId, newUser);
		res.status(200).json({success: true});
	},

	updateUser: async (req, res, next) => {
		const { userId } = req.params;
		const newUser = req.body;
		const oldUser = await User.findByIdAndUpdate(userId, newUser);
		res.status(200).json({success: true});
	},

};
