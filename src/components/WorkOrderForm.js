import React, { useState } from 'react';

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
		<div className="container">
			<div className="row xs-fluid mx-auto justify-content-center">
				<form
					className="container-xs m-5 p-2 bg-white border"
					onSubmit={submitHandler}
				>
					<div className="card-body">
						<h2 className="">New Work Order</h2>
						<div className="form-group row">
							<div className="col-lg-6 col-md-9 col-sm-7">
								<label>Address</label>
								<input
									className="form-control"
									type="text"
									value={enteredAddress}
									onChange={addressChangeHandler}
								/>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-5">
								<label>Job Type</label>
								<select
									className="form-control"
									onChange={jobTypeChangeHandler}
                >
									<option value="">select</option>
									<option value="concrete-foundation">
										Concrete Foundation
									</option>
									<option value="framing">Framing</option>
									<option value="siding">Siding</option>
									<option value="roof">Roof</option>
								</select>
							</div>
							<div className="col-lg-3">
								<label>Deadline</label>
								<input
									className="form-control"
									type="date"
									value={enteredDeadline}
									onChange={deadlineChangeHandler}
								/>
							</div>
						</div>
						<div className="col-fluid">
							<label>Notes</label>
							<textarea
								className="form-control"
								type="text"
								value={enteredNotes}
								onChange={notesChangeHandler}
							/>
						</div>
						<div className="row justify-content-end">
							<div className="col">
								<button className="btn mt-3 btn-warning" type="submit">
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default WorkOrderForm;
