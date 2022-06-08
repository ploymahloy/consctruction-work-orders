import React, { useState } from 'react';

import Card from './UI/Card';
import './WorkOrderForm.css';

const WorkOrderForm = (props) => {
	const [enteredAddress, setEnteredAddress] = useState('');
	const [enteredJobType, setEnteredJobType] = useState('');
	const [enteredNotes, setEnteredNotes] = useState('');
	const [enteredDeadline, setEnteredDeadline] = useState('');

	const addressChangeHandler = (e) => {
		setEnteredAddress(e.target.value);
	};

	const jobTypeChangeHandler = (e) => {
		if (e.target.value === '') return;
		switch (e.target.value) {
			case 'concrete-foundation':
				setEnteredJobType('Concrete Foundation');
				break;
			case 'framing':
				setEnteredJobType('Framing');
				break;
			case 'siding':
				setEnteredJobType('Siding');
				break;
			case 'roof':
				setEnteredJobType('Roof');
				break;
		}
	};

	const notesChangeHandler = (e) => {
		setEnteredNotes(e.target.value);
	};

	const deadlineChangeHandler = (e) => {
    setEnteredDeadline(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const workOrderData = {
			address: enteredAddress,
			job: enteredJobType,
			notes: enteredNotes,
			deadline: new Date(enteredDeadline),
			id: Math.random().toString()
    };

		props.onSaveFormData(workOrderData);

		setEnteredAddress('');
		setEnteredJobType('');
		setEnteredNotes('');
		setEnteredDeadline('');
	};

	return (
		<Card className="form">
			<form onSubmit={submitHandler}>
				<div className="form-row">
					<p className="form-title">New Work Order</p>
				</div>
				<div className="form-row">
					<label>Address</label>
					<input
            type="text"
						value={enteredAddress}
						onChange={addressChangeHandler}
					/>
				</div>
				<div className="form-row">
					<label>Job Type</label>
					<select onChange={jobTypeChangeHandler}>
						<option value=""></option>
						<option value="concrete-foundation">Concrete Foundation</option>
						<option value="framing">Framing</option>
						<option value="siding">Siding</option>
						<option value="roof">Roof</option>
					</select>
				</div>
				<div className="form-row">
					<label>Notes</label>
					<textarea
						type="text"
						value={enteredNotes}
						onChange={notesChangeHandler}
					></textarea>
				</div>
				<div className="form-row">
					<label>Deadline</label>
					<input
            type="date"
						value={enteredDeadline}
						onChange={deadlineChangeHandler}
					/>
				</div>
				<div className="form-row">
					<button type="submit">Add Work Order</button>
				</div>
			</form>
		</Card>
	);
};

export default WorkOrderForm;
