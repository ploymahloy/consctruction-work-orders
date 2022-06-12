import React from 'react';

import Job from './Job';

const JobList = (props) => {
  return (
    <div className="">
      {props.items.map((job) => (
        <Job
          key={job.id}
          address={job.address}
          job={job.job}
          notes={job.notes}
          deadline={job.deadline}
        />
      ))}
    </div>
  )
}

export default JobList;
