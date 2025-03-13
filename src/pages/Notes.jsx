import React from 'react';
    import '../styles/Notes.css';

    function Notes() {
      return (
        <section id="notes" className="notes-section">
          <h2>Previously Uploaded Notes</h2>
          <div className="previously-uploaded">
            <h3>Simulated Notes</h3>
            <p>No notes uploaded yet.</p>
          </div>
        </section>
      );
    }

    export default Notes;
