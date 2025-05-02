import React, { useState } from 'react';

function Task({ tasks, onComplete, onEdit, onDelete }) {
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editNote, setEditNote] = useState('');

    const handleSave = (id) => {
        onEdit(id, editTitle, editNote);
        setEditId(null);
    };

    return (
        <div>
            <h5>All Tasks</h5>
            {tasks.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '80vh' }}>
                <img style={{ width: '30%' }} alt="task img" src={`${process.env.PUBLIC_URL}/task.jpg`} />
                <p className="text-muted mt-3">You haven’t added any tasks yet</p>
              </div>              
            ) : (
                tasks.map(task => (
                    <div key={task.id} className="card mb-2">
                        <div className="card-body">
                            {editId === task.id ? (
                                <>
                                    <input className="form-control mb-2" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                                    <textarea className="form-control mb-2" style={{ height: '150px', resize: 'none' }} value={editNote} onChange={e => setEditNote(e.target.value)} />
                                    <button className="btn btn-success btn-sm me-2" onClick={() => handleSave(task.id)}>
                                        Save
                                    </button>
                                    <button className="btn btn-secondary btn-sm" onClick={() => setEditId(null)}>
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <small className="float-end">{task.date}</small>
                                    <h6 className='title'>
                                        {task.title}{' '}
                                    </h6>
                                    <p style={{ whiteSpace: 'pre-line' }}>{task.note}</p>
                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        onClick={() => { setEditId(task.id); setEditTitle(task.title); setEditNote(task.note); }} >
                                        Edit
                                    </button>
                                    <button className="btn btn-success btn-sm me-2" onClick={() => onComplete(task.id)}>
                                        Complete
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Task;
