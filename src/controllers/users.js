const User = require('../models/user');
const Car = require('../models/car');
const Joi = require('joi');

const idSchema = Joi.object().keys({
	userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});

module.exports = {
	index: async (req, res, next) => {
		const users = await User.find({});
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

	getUserCars: async (req, res, next) => {
		const { userId } = req.params;
		const user = await User.findById(userId).populate('cars');
		res.status(200).json(user.cars);
	},

	newUserCar: async (req, res, next) => {
		const { userId } = req.params;
		const newCar = new Car(req.body);
		const user = await User.findById(userId);
		newCar.seller = user;
		await newCar.save();
		user.cars.push(newCar);
		await user.save();
		res.status(201).json(newCar);
	}
};
