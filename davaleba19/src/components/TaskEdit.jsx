import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskEdit = ({ tasks, editTask }) => {
  const { id } = useParams();
  const task = tasks.find(t => t.id === id);
  const [taskName, setTaskName] = useState(task ? task.name : '');
  const [term, setTerm] = useState(task ? task.term : '');
  const [assigneeName, setAssigneeName] = useState(task ? task.assigneeName : '');
  const [additionalInfo, setAdditionalInfo] = useState(task ? task.additionalInfo : '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id, { ...task, name: taskName, term, assigneeName, additionalInfo });
    navigate('/');
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

      <button type="submit">Update Task</button>
    </form>
  );
};

export default TaskEdit;
