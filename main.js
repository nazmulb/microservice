const app = require('./app');

const server = app.listen(8082, () => {
	console.log("Server running at port %s", server.address().port);
});