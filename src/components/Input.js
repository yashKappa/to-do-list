import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Input({ onAdd }) {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [noteError, setNoteError] = useState(false);

    const handleSubmit = () => {
        const trimmedTitle = title.trim();
        const trimmedNote = note.trim();
        
        setTitleError(!trimmedTitle);
        setNoteError(!trimmedNote);

        if (!trimmedTitle || !trimmedNote) return;

        const newTask = {
            id: Date.now(),
            title,
            note,
            date: new Date().toLocaleString(),
        };
        onAdd(newTask);
        setTitle('');
        setNote('');
        setTitleError(false);
        setNoteError(false);
    };

    return (
        <div className='input'>
            <h4>Add Task</h4>
            <input
  type="text"
  className={`form-control mb-1 ${titleError ? 'is-invalid' : ''}`}
  style={{  boxShadow: 'none', outline: 'none' }}
  placeholder="Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
{titleError && <div className="text-danger mb-2">Fill this Input box</div>}

<textarea
  className={`form-control mb-1 ${noteError ? 'is-invalid' : ''}`}
  style={{ height: '300px', resize: 'none', boxShadow: 'none', outline: 'none' }}
  placeholder="Note"
  value={note}
  onChange={(e) => setNote(e.target.value)}
/>
{noteError && <div className="text-danger mb-2">Fill this Input box</div>}


            <div className='d-flex justify-content-center'>
                <button
                    className="Add"
                    style={{ width: '200px', fontWeight: 'bolder' }}
                    onClick={handleSubmit}
                >
                    Add Task
                </button>
            </div>
        </div>
    );
}

export default Input;
