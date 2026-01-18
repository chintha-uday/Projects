import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout, userType } = useContext(AuthContext);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setProfileDropdownOpen(false);
    navigate('/login');
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
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
              {userType === 'admin' && (
                <button className="nav-btn" onClick={() => navigate('/admin')}>
                  Admin Dashboard
                </button>
              )}
              <div className="profile-menu">
                <button 
                  className="profile-btn"
                  onClick={toggleProfileDropdown}
                  title="Click to view profile and logout"
                >
                  👤 {user.name}
                </button>
                {profileDropdownOpen && (
                  <div className="profile-dropdown">
                    <div className="profile-info">
                      <div className="profile-header">
                        <span className="profile-name">{user.name}</span>
                        <span className="profile-type">{userType}</span>
                      </div>
                      <span className="profile-email">{user.email}</span>
                    </div>
                    <div className="profile-divider"></div>
                    <button 
                      className="dropdown-item"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        navigate('/dashboard');
                      }}
                    >
                      📊 Dashboard
                    </button>
                    <button 
                      className="dropdown-item logout-item"
                      onClick={handleLogout}
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
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
