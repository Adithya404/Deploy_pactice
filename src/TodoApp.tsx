import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css';

const API_URL=process.env.PUBLIC_BACKEND_URL;
const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; task: string }[]>([]);
  const [task, setTask] = useState<string>('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const addTask = async () => {
    if (task.trim()) {
      try {
        const res = await axios.post(`${API_URL}/tasks`, { task });
        setTasks([...tasks, res.data]);
        setTask('');
      } catch (err) {
        console.error('Error adding task:', err);
      }
    }
  };

  const removeTask = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a task" 
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((t) => (
          <li key={t.id} className="todo-item">
            {t.task} <button onClick={() => removeTask(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
