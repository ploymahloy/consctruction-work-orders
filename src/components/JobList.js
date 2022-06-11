import React from 'react';

import Job from './Job';

const JobList = (props) => {
  return (
    <ul className="container">
      {props.items.map((job) => (
        <Job
          key={job.id}
          address={job.address}
          job={job.job}
          notes={job.notes}
          deadline={job.deadline}
        />
      ))}
    </ul>
  )
}

export default JobList;
