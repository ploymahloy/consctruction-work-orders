import React, { useState } from 'react';

import Deadline from '../components/Deadline';
import NotesModal from './modals/NotesModal';

import notes from '../assets/writing.png';
import './Job.css';

const Job = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li className="card">
			<div className="job-item address">
				<h3 className="job-item-title">Address</h3>
				{props.address}
			</div>
			<div className="job-item job">
				<h3 className="job-item-title">Job</h3>
				{props.job}
			</div>
			<div className="job-item deadline">
				<h3 className="job-item-title">Deadline</h3>
				<Deadline deadline={props.deadline} />
			</div>
			<div className="job-item notes">
				<button className="open-modal-button" onClick={() => setIsOpen(true)}>
					<img src={notes} className="icon-button-notes" />
				</button>
				<NotesModal
					open={isOpen}
					notes={props.notes}
					onClose={() => setIsOpen(false)}
				/>
			</div>
		</li>
	);
};

export default Job;
