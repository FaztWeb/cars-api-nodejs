const express = require('express');
const router = require('express-promise-router')();

// we can use routes in this way
// app.route(route, callback)
// or in this way
// app.router(route).method(callback)

const UserController = require('../controllers/users');

router.route('/')
	.get(UserController.index)
	.post(UserController.newUser)

router.route('/:userId')
	.get(UserController.getUser)
	.put(UserController.replaceUser)
	.patch(UserController.updateUser)
	// .delete()

module.exports = router;
