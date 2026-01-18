import React, { createContext, useState, useEffect } from 'react';
import mockUsersData from '../data/mockUsers.json';

export const AuthContext = createContext();

// Storage key for localStorage
const USERS_STORAGE_KEY = 'medicine_finder_users';

// Initialize users database
const initializeUsers = () => {
  // Check if users exist in localStorage
  const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
  if (storedUsers) {
    return JSON.parse(storedUsers);
  }
  // Use mock data as initial users
  return mockUsersData.users;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [users, setUsers] = useState([]);

  // Initialize users on component mount
  useEffect(() => {
    const initialUsers = initializeUsers();
    setUsers(initialUsers);
  }, []);

  // Save users to localStorage
  const saveUsersToStorage = (updatedUsers) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const login = (email, password, type) => {
    // Find user in the users database
    const foundUser = users.find(
      (u) => u.email === email && u.password === password && u.userType === type
    );

    if (foundUser) {
      setUser({ email: foundUser.email, name: foundUser.name });
      setUserType(foundUser.userType);
      return true;
    }
    return false;
  };

  const register = (email, password, name) => {
    // Validate inputs
    if (!email || !password || !name) {
      return false;
    }

    if (password.length < 6) {
      return false;
    }

    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      return false;
    }

    // Create new user
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      name,
      email,
      password,
      userType: 'doctor',
      createdAt: new Date().toISOString(),
    };

    // Add to users array and save
    const updatedUsers = [...users, newUser];
    saveUsersToStorage(updatedUsers);

    // Auto-login after registration
    setUser({ email: newUser.email, name: newUser.name });
    setUserType('doctor');
    return true;
  };

  const loginAsGuest = () => {
    setUser({ email: 'guest@example.com', name: 'Guest User' });
    setUserType('guest');
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
  };

  // Get all users (for admin purposes)
  const getAllUsers = () => users;

  return (
    <AuthContext.Provider
      value={{
        user,
        userType,
        login,
        register,
        loginAsGuest,
        logout,
        getAllUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
