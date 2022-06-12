import React, { useState } from 'react';

import Deadline from '../components/Deadline';
import NotesModal from './modals/NotesModal';

const Job = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border m-2">
			<div className="border-bottom text-warning bg-dark">
				<h2 className="p-2">{props.address}</h2>
			</div>
			<div className="row p-2">
				<div className="col-5">
					<h3 className="mt-2">Job</h3>
					{props.job}
				</div>
				<div className="col-4">
					<h3 className="mt-2">Deadline</h3>
					<Deadline deadline={props.deadline} />
				</div>
					<div className="col-3">
						<button className="btn border mt-2" onClick={() => setIsOpen(true)}>
							<p className="my-2">Details</p>
						</button>
				</div>
				<NotesModal
					className="col-3"
					open={isOpen}
					notes={props.notes}
					onClose={() => setIsOpen(false)}
				/>
			</div>
		</div>
	);
};

export default Job;
