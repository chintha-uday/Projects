import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout, userType } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>💊 Medicine Finder</h1>
        </div>
        <nav className="nav">
          {user ? (
            <div className="nav-items">
              <span className="user-info">
                {user.name} ({userType})
              </span>
              {userType === 'admin' && (
                <button className="nav-btn" onClick={() => navigate('/admin')}>
                  Admin Dashboard
                </button>
              )}
              <button className="nav-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="nav-items">
              <button className="nav-btn" onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="nav-btn signup-btn" onClick={() => navigate('/register')}>
                Register
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
