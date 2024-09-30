import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
  if (!Array.isArray(tasks)) {
    return <p>No tasks available</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={() => toggleCompletion(task.id)}>
            {task.isCompleted ? 'Undo' : 'Complete'}
          </button>
          <Link to={`/edit/${task.id}`}>Edit</Link>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
