const morgan = require('morgan');
const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));

// routes
app.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'You requested index page'
	});
});

// catch 404 Errors and Forward them to Error Handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error Handler Function
app.use((err, req, res, next) => {
	const error = app.get('env') === 'development' ? err : {};
	const status = error.status || 500;

	// response to client
	res.status(status).json({
		error: {
			message: error.message
		}
	});

	// show in console
	console.error(err);
});

// Start The server
app.listen(app.get('port'), () => {
	console.log(`server on port ${app.get('port')}`)
});
