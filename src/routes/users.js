const express = require('express');
const router = express.Router();

// we can use routes in this way
// app.route(route, callback)
// or in this way
// app.router(route).method(callback)

const UserController = require('../controllers/users');

router.route('/')
	.get(UserController.index)
	.post(UserController.newUser)

module.exports = router;
