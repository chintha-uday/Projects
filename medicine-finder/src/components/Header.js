import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AdminLoginModal from './AdminLoginModal';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout, userType } = useContext(AuthContext);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setProfileDropdownOpen(false);
    navigate('/');
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleAdminClick = () => {
    if (userType === 'admin') {
      navigate('/admin');
    } else {
      setAdminModalOpen(true);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={() => navigate('/')}>
            <h1>💊 Medicine Finder</h1>
          </div>
          <nav className="nav">
            <div className="nav-items">
              <button className="nav-btn admin-btn" onClick={handleAdminClick}>
                🔐 {userType === 'admin' ? 'Admin Dashboard' : 'Admin Login'}
              </button>
              {user && (
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
                          navigate('/');
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
              )}
            </div>
          </nav>
        </div>
      </header>
      <AdminLoginModal isOpen={adminModalOpen} onClose={() => setAdminModalOpen(false)} />
    </>
  );
};

export default Header;
