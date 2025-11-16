import React, { useState } from 'react';
import './App_5B.css';

function App_5B() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert(`Logging in with Username: ${username} and Password: ${password}`);
    // Normally you’d send this to a backend server
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p className="subtitle">Please login to continue</p>

        <div className="form-group">
          <label>Username</label>
          <div className="input-wrapper">
            <input
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App_5B;
