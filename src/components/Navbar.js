import React from 'react';

import logo from '../assets/hook.png';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="navbar navbar-expand-lg border border-bottom">
			<span className="navbar-text mx-3">
				<a className="navbar-brand">
					<img className="" src={logo} width="50px" height="50px" />
        </a>
        <span class="navbar-brand mb-0 h1">Fictional Building Co.</span>
			</span>
		</div>
	);
};

export default Navbar;
