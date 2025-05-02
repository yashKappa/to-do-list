import React from 'react';

function Complete({ completedTasks, onDelete }) {
  return (
    <div>
      <h5>Completed Tasks</h5>
      {completedTasks.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '80vh' }}>
          <img style={{ width: '30%' }} alt="task img" src={`${process.env.PUBLIC_URL}/task.jpg`} />
          <p className="text-muted mt-3">You haven’t completed any tasks yet.</p>
        </div>
      ) : (
        completedTasks.map(task => (
          <div key={task.id} className="card mb-2">
            <div className="card-body">
            <small className="float-end">{task.date}</small>
              <h6 className='title'>
                {task.title}{' '}
              </h6>
              <p style={{ whiteSpace: 'pre-line' }}>{task.note}</p>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id, 'complete')}>
                Delete
              </button>

            </div>
          </div>
        ))
      )}
    </div>

  );
}

export default Complete;
