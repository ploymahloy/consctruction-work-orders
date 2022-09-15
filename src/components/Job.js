import React, { useState } from 'react';

import Deadline from '../components/Deadline';
import NotesModal from './modals/NotesModal';

const Job = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
			<div className="card-body text-center bg bg-white border rounded">
				<div className="rounded p-2">
					<h3>Job ID {props.id}</h3>
					{/* <h3>Job ID {Math.round(Math.random()*10000)}</h3> */}
					<hr />
					<h4>Job</h4>
					<p>{props.job}</p>
					<h4>Deadline</h4>
					<Deadline deadline={props.deadline} />
					<button
						className="btn btn-warning w-100 pb-0"
						onClick={() => setIsOpen(true)}
					>
						<h4>Details</h4>
					</button>
				</div>
				<NotesModal
					className=""
					open={isOpen}
					address={props.address}
					notes={props.notes}
					onClose={() => setIsOpen(false)}
				/>
			</div>
	);
};

export default Job;
