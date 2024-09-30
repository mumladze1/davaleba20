import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [term, setTerm] = useState('');
  const [assigneeName, setAssigneeName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name: taskName, isCompleted: false, term, assigneeName, additionalInfo });
    setTaskName('');
    setTerm('');
    setAssigneeName('');
    setAdditionalInfo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task Name:</label>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
      
      <label>Term:</label>
      <input type="date" value={term} onChange={(e) => setTerm(e.target.value)} required />

      <label>Assignee Name:</label>
      <input type="text" value={assigneeName} onChange={(e) => setAssigneeName(e.target.value)} required />

      <label>Additional Info:</label>
      <input type="text" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
