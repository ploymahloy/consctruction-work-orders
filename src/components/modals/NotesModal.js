import React from 'react';
import ReactDom from 'react-dom';

import './NotesModal.css';

const NotesModal = ({ open, notes, onClose }) => {
	if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div id="modal" className="container w-50 p-3">
        <h2>Notes</h2>
        <hr />
        <p>{notes ? notes : 'No notes available.'}</p>
        <footer>
          <button className="btn btn-warning" onClick={onClose}>Close</button>
        </footer>
      </div>
    </>,
    document.getElementById('portal')
	);
};

export default NotesModal;
