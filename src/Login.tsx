import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Simulate authentication success
    navigate('/TodoApp');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={handleEmailChange}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={handlePasswordChange}
        />
        <input type='submit' />
      </form>
    </>
  );
};

export default Login;
