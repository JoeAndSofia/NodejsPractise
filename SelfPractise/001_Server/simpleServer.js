const express = require('express');
// const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');

	next();
});

app.get('/', (req, res) => {
	console.log(req.query);
	console.log(req.body);
	res.status(200).send('get');
});
app.post('/test/post', (req, res) => {
	console.log('query', req.query);
	console.log('body', req.body);
	res.status(200).send(req.body);
});

app.listen(10000, () => {
	console.log('server started');
});