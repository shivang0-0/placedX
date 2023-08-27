import React, { useState } from 'react';
import logoImage from '../assets/logo-jiit.png';

function Landing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // To do
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Lexend, sans-serif',
  };

  const inputStyles = {
    width: '90%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontFamily: 'Lexend, sans-serif',
  };

  return (
    <div>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #ccc' }}>
        <img src={logoImage} alt="Logo" style={{ height: '90px', marginRight: '20px' }} />
        <h1 style={{ fontSize: '36px', marginRight: '40%'}}>JIIT TnP Cell e-portal</h1>
      </header>
      <div style={formStyles}>
        <form style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '20px', width: '300px' }} onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: '20px', textAlign: 'center', fontFamily: 'Lexend, sans-serif' }}>Login</h2>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} style={inputStyles} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} style={inputStyles} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'Lexend, sans-serif',
              }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Landing;
