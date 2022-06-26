import React from 'react';

import Job from './Job';

const JobList = (props) => {

	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {props.items.map((job) =>
        (
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
		</div>
	);
};

export default JobList;
