import React, { useState } from 'react';

import Deadline from '../components/Deadline';
import NotesModal from './modals/NotesModal';

const Job = (props) => {
  const [isOpen, setIsOpen] = useState(false);

	return (
		<li className="container card my-2 py-4">
			<div className="row justify-content-center">
				<div className="col-3">
					<h3 className="">Address</h3>
					{props.address}
				</div>
				<div className="col-3">
					<h3 className="">Job</h3>
					{props.job}
				</div>
				<div className="col-2">
					<h3 className="">Deadline</h3>
					<Deadline deadline={props.deadline} />
				</div>
				<div className="col-3">
					<h3 className="">Details</h3>
					<button className="btn border" onClick={() => setIsOpen(true)}>
						<i className="bi bi-pencil-square" />
					</button>
				</div>
				<NotesModal
					className="col-3"
					open={isOpen}
					notes={props.notes}
					onClose={() => setIsOpen(false)}
				/>
			</div>
		</li>
	);
};

export default Job;
