import React, { Fragment } from 'react';

const LogTableHeader = () => (
	<>
		<span className="table-head">ID</span>
		<span className="table-head">Method</span>
		<span className="table-head">Body</span>
		<span className="table-head">Headers</span>
		<span className="table-head">Path</span>
		<span className="table-head">Date</span>
		<style jsx>
			{`
				.table-head {
					border-bottom: 1px solid black;
					border-left: 1px solid black;

					padding: 8px 4px;
					background-color: #333;
					color: #f2f2f2;
				}
			`}
		</style>
	</>
);

const LogTable = ({ logs }) => {
	return (
		<>
			<div className="grid">
				<LogTableHeader />
				{logs.map((log, i) => (
					<Fragment key={String(log._id)}>
						<span
							onClick={() => {
								window.location = `/log?logId=${String(log._id)}`;
							}}
							className={i % 2 !== 0 ? 'grid-item' : 'grid-item-odd'}
						>
							{String(log._id)}
						</span>
						<span className={i % 2 !== 0 ? 'grid-item' : 'grid-item-odd'}>{String(log.method)}</span>
						<span className={i % 2 !== 0 ? 'grid-item' : 'grid-item-odd'}>{JSON.stringify(log.body)}</span>
						<span className={i % 2 !== 0 ? 'grid-item' : 'grid-item-odd'}>{JSON.stringify(log.headers)}</span>
						<span className={i % 2 !== 0 ? 'grid-item' : 'grid-item-odd'}>{String(log.path)}</span>
						<span className={i % 2 !== 0 ? 'grid-item' : 'grid-item-odd'}>{String(log.date)}</span>
					</Fragment>
				))}
			</div>
			<style jsx>
				{`
					.grid {
						display: grid;
						grid-template-columns: 2fr 1fr 5fr 5fr 1fr 2fr;

						border-top: 1px solid black;
						border-right: 1px solid black;
					}

					.grid-item {
						border-bottom: 1px solid black;
						border-left: 1px solid black;

						padding: 8px 4px;
					}

					.grid-item-odd {
						border-bottom: 1px solid black;
						border-left: 1px solid black;

						padding: 8px 4px;
						background-color: #ccc;
					}
				`}
			</style>
		</>
	);
};

export default LogTable;
