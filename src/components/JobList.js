import React from 'react';

import Job from './Job';

import classes from './JobList.module.css'

const JobList = (props) => {
  return (
    <ul className={classes.joblist}>
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
