import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import TodoApp from './TodoApp';
import './App.css';

function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TodoApp" element={<TodoApp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
