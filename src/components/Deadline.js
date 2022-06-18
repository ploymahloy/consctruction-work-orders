import React from 'react';

const Deadline = (props) => {
  const month = props.deadline.toLocaleString('en-US', { month: 'short' });
  const day = +props.deadline.toLocaleString('en-US', { day: '2-digit' }) + 1;
  const year = props.deadline.getFullYear();

  return <div className="mb-3">{month} {day}, {year}</div>
}

export default Deadline;
