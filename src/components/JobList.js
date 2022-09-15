import React from 'react';

import Job from './Job';
import './JobList.css';

const JobList = (props) => {
	return (
		<div className="wrapperGrid row xs-fluid mx-auto justify-content-center">
			{props.items.map((job) => (
				<Job
					key={job.id}
					id={job.id}
					address={job.address}
					job={job.job}
					notes={job.notes}
					deadline={job.deadline}
				/>
			))}
		</div>
	);
};

export default JobList;
