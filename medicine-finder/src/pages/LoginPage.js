import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './AuthPages.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('doctor');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, loginAsGuest } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password, userType)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to your Medicine Finder account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Login As</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="doctor"
                  checked={userType === 'doctor'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Doctor
              </label>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={userType === 'admin'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Admin
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGuestLogin} className="guest-btn">
          Continue as Guest
        </button>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <span onClick={() => navigate('/register')} className="link">
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
