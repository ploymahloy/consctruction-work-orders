import React from 'react';
import ReactDom from 'react-dom';

import './NotesModal.css';

const NotesModal = ({ open, notes, onClose }) => {
  if (!open) return null;

	return ReactDom.createPortal(
		<>
			<div className="overlay" onClick={onClose} />
      <div className="modal">
        <h2>Notes</h2>
        <p>{notes}</p>
        <footer>
          <button onClick={onClose}>Close</button>
        </footer>
			</div>
		</>,
		document.getElementById('portal')
	);
};

export default NotesModal;
