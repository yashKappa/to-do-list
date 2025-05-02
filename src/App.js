import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Task from './components/Task';
import Complete from './components/Complete';
import Input from './components/Input';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [completedTasks, setCompletedTasks] = useState(() => JSON.parse(localStorage.getItem('completedTasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const handleComplete = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setCompletedTasks([task, ...completedTasks]);
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  const handleEdit = (id, updatedTitle, updatedNote) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: updatedTitle, note: updatedNote } : task
    ));
  };

  const handleDelete = (id, from = 'task') => {
    if (from === 'task') {
      setTasks(tasks.filter(t => t.id !== id));
    } else {
      setCompletedTasks(completedTasks.filter(t => t.id !== id));
    }
  };

  return (
    <div className="d-flex flex-column flex-lg-row">
      <Sidebar />
      <div className="container-fluid p-4" style={{ flex: 1 }}>
        <Routes>
          <Route path="/task" element={<Task tasks={tasks} onComplete={handleComplete} onEdit={handleEdit} onDelete={(id) => { setTasks(tasks.filter(t => t.id !== id)); }} />} />
          <Route path="/complete" element={<Complete completedTasks={completedTasks} onDelete={handleDelete} />} />
          <Route path="/" element={<Input onAdd={handleAddTask} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
