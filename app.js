const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
// This object will contain key-value pairs, where the value can be a string or array 
// (when extended is false), or any type (when extended is true).
const urlEncodenParser = bodyParser.urlencoded({extended: false});

const logger = (req, res, next) => {
	console.log(Date.now()+": "+req.originalUrl+" - "+req.method);
	next();
};

app.use(logger);

app.get('/', (req, res) => {
	res.redirect('/home');
});

app.get('/home', (req, res) => {
	res.json({msg: 'Home Page'});
});

app.get('/about', (req, res) => {
	res.json({msg: 'About Page'});
});

router.get('/:id', (req, res) => {
	let user = {
		id: parseInt(req.params.id),
		first_name: "Nahiyan",
		last_name: "Bin Nazmul"
	};

	res.json(user);
});

router.put('/:id', urlEncodenParser, (req, res) => {
	let user = {
		id: parseInt(req.params.id),
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};

	res.json(user);
});

router.delete('/:id', (req, res) => {
	res.json({msg: 'Successfully removed user id: ' +req.params.id});
});

router.post('/add', urlEncodenParser, (req, res) => {
	let user = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};
	
	res.json(user);
});

app.use('/user', router);

// catch 404 and forward to error handler
app.use( (req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});
  
// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500).json({msg: err.message});
});

module.exports = app;