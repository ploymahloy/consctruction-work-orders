import React, { useState } from 'react';

import JobList from './components/JobList';
import Navbar from './components/Navbar';
import WorkOrderForm from './components/WorkOrderForm';

import './App.css';

const starter_data = [
	{
		id: 'wo1',
		address: '3563 New House Lane',
		job: 'Concrete Foundation',
		notes: 'Foreman on vacation 7/18-7/22.',
		deadline: new Date(2022, 8, 14)
	},
	{
		id: 'wo2',
		address: '12999 Back Country Lane',
    job: 'Siding',
    notes: 'Homeowner is immuno-compromised, must use face-covering.',
		deadline: new Date(2022, 11, 1)
	},
	{
		id: 'wo3',
		address: '599 Townhouse Way',
		job: 'Roof',
		notes: 'Homeowners are nudists, avoid in-person contact if possible.',
		deadline: new Date(2022, 9, 24)
  },
  {
		id: 'wo4',
		address: '12 Street Ln',
    job: 'Siding',
    notes: '',
		deadline: new Date(2023, 2, 16)
	},
	{
		id: 'wo5',
		address: '452 Townhouse Way',
		job: 'Framing',
		notes: 'Guest parking marked.',
		deadline: new Date(2023, 1, 4)
  },
  {
		id: 'wo6',
		address: '29 House Street',
		job: 'Framing',
		notes: 'Park on street.',
		deadline: new Date(2023, 1, 4)
	}
];

const App = () => {
	const [workOrders, setWorkOrders] = useState(starter_data);

	const addWorkOrderHandler = (workOrder) => {
		setWorkOrders((prevWorkOrders) => {
			return [workOrder, ...prevWorkOrders];
		});
	};

	return (
		<div className="App">
			<Navbar />
			<WorkOrderForm onSaveFormData={addWorkOrderHandler} />
			<JobList items={workOrders} />
		</div>
	);
};

export default App;
