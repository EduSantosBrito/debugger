import React from 'react';

const LogDescription = ({ method, body, path, headers }) => {
	return (
		<div>
			<h1>
				[{method}] {path}
			</h1>
			<div>
				<pre>{JSON.stringify(headers, null, 2)}</pre>
			</div>
			<br />
			<div>
				<pre>{JSON.stringify(body, null, 2)}</pre>
			</div>
			<style jsx>{`
				pre {
					font-size: 20px;
				}
			`}</style>
		</div>
	);
};

LogDescription.getInitialProps = async ({ req: { db }, query: { logId } }) => {
	const log = await db.model('Logs').findOne({ _id: logId });
	return log;
};

export default LogDescription;
