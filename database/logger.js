const { Schema, model } = require('mongoose');

const logSchema = new Schema({
	method: String,
	path: String,
	body: { type: {}, default: null },
	headers: {type: {}, default: null},
	date: { type: Date, default: Date.now },
});

const LogModel = model('Logs', logSchema);

const logger = method => async ({ body, path, headers }) => {
	const newLog = LogModel({
		method,
		body,
		path,
		headers
	});

	await newLog.save();
};

module.exports = { logger, LogModel };
