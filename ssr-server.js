const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const { logger } = require('./database/logger');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(async () => {
		const connection = await mongoose.connect('mongodb://mongo:27017/logs', { useNewUrlParser: true });
		const server = express();

		server.use(bodyParser.json());
		server.use(bodyParser.urlencoded({ extended: true }));

		server.use((req, res, next) => {
			req.db = connection;
			next();
		});

		server.post('/api/*', async (req, res) => {
			await logger('POST')(req);
			res.send('OK');
		});

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, err => {
			if (err) throw err;
			console.log('> Ready!');
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
