const express = require('express');
const router = require('express-promise-router')();

const { validateParam } = require('../helpers/routeshelpers');

const UserController = require('../controllers/users');

router.route('/')
	.get(UserController.index)
	.post(UserController.newUser)

router.route('/:userId')
	.get(UserController.getUser)
	.put(UserController.replaceUser)
	.patch(UserController.updateUser)

router.route('/:userId/cars')
	.get(UserController.getUserCars)
	.post(UserController.newUserCar)
	// .get()

module.exports = router;
