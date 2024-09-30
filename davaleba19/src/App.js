
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskEdit from './components/TaskEdit';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(`https://crudapi.co.uk/api/v1/tasks`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
        },
      });
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    const response = await axios.post(`https://crudapi.co.uk/api/v1/tasks`, newTask, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
      },
    });
    setTasks([...tasks, response.data]);
  };

  const editTask = async (id, updatedTask) => {
    await axios.put(`https://crudapi.co.uk/api/v1/tasks/${id}`, updatedTask, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
      },
    });
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://crudapi.co.uk/api/v1/tasks/${id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_CRUD_API_KEY}`,
      },
    });
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompletion = async (id) => {
    const taskToUpdate = tasks.find(task => task.id === id);
    const updatedTask = { ...taskToUpdate, isCompleted: !taskToUpdate.isCompleted };
    await editTask(id, updatedTask);
  };

  return (
    <div>
      <h1>TODO Application</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Task</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />} />
        <Route path="/add" element={<TaskForm addTask={addTask} />} />
        <Route path="/edit/:id" element={<TaskEdit tasks={tasks} editTask={editTask} />} />
      </Routes>
    </div>
  );
};

export default App;

