import React from 'react';
import LogTable from '../../components/logTable';

const Logs = ({ logs }) => {
	return (
		<div>
			<h1>Logs Page</h1>
			<LogTable logs={logs} />
		</div>
	);
};

Logs.getInitialProps = async ({ req: { db }, query: { current, max } }) => {
	const skip = !Number.isNaN(Number(current)) ? Number(current) : 0;
	const limit = !Number.isNaN(Number(max)) ? Number(max) : 10;

	const logs = await db.model('Logs').find({}, undefined, { skip, limit });
	return { logs };
};

export default Logs;
