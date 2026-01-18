# Mock Database Implementation Guide

## Overview
The Medicine Finder application now uses a **Mock Database with JSON** approach to store user credentials. User data is persisted using browser **localStorage**.

## Where User Data is Stored

### 1. **Initial Mock Users** 
📁 Location: [src/data/mockUsers.json](src/data/mockUsers.json)

```json
{
  "users": [
    {
      "id": 1,
      "name": "Admin User",
      "email": "admin@medicine.com",
      "password": "admin123",
      "userType": "admin",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    {
      "id": 2,
      "name": "Dr. John Smith",
      "email": "john.smith@medicine.com",
      "password": "doctor123",
      "userType": "doctor",
      "createdAt": "2024-01-05T00:00:00Z"
    }
  ]
}
```

### 2. **Authentication Context**
📁 Location: [src/context/AuthContext.js](src/context/AuthContext.js)

Handles:
- ✅ Loading users from mock database
- ✅ Saving new registrations to localStorage
- ✅ User login validation
- ✅ User registration with duplicate email check
- ✅ Logout functionality

### 3. **Browser LocalStorage**
The registered users are stored in browser's localStorage with key: `medicine_finder_users`

**To view stored users:**
1. Open Browser DevTools (F12)
2. Go to Application → Storage → Local Storage
3. Find `medicine_finder_users` key
4. It contains JSON array of all registered users

## How It Works

### Registration Flow
```
User Registration Form
        ↓
Input Validation (name, email, password)
        ↓
Check for Duplicate Email
        ↓
Create New User Object
        ↓
Save to localStorage
        ↓
Update React State
        ↓
Auto-login User
        ↓
Redirect to Dashboard
```

### Login Flow
```
Login Form (Email + Password + UserType)
        ↓
Load users from localStorage
        ↓
Search for matching user
        ↓
Validate password match
        ↓
Set user context
        ↓
Redirect to Dashboard
```

## Key Features

### ✅ Duplicate Email Prevention
- Prevents registration with existing email
- Shows error: "Email already registered. Please use a different email or login."

### ✅ Password Validation
- Minimum 6 characters required
- Confirm password must match
- Stored as plain text (for demo purposes)

### ✅ User Types
- `admin` - Administrator access
- `doctor` - Doctor/Medical professional access
- `guest` - Guest user access (no credentials needed)

### ✅ Persistent Storage
- Users persist across browser sessions
- Data lost only when localStorage is cleared
- Each user has:
  - Unique ID
  - Name
  - Email
  - Password
  - User Type
  - Creation Timestamp

## Test Credentials

**Pre-loaded Admin User:**
- Email: `admin@medicine.com`
- Password: `admin123`
- Type: Admin

**Pre-loaded Doctor:**
- Email: `john.smith@medicine.com`
- Password: `doctor123`
- Type: Doctor

**Register New User:**
- Use any email and password (min 6 chars)
- Automatically becomes Doctor type
- Data saved to localStorage

## Storage Structure

### mockUsers.json (Initial Data)
```javascript
{
  users: [
    {
      id: number,
      name: string,
      email: string,
      password: string,
      userType: 'admin' | 'doctor' | 'guest',
      createdAt: ISO timestamp
    }
  ]
}
```

### localStorage (Runtime Data)
Key: `medicine_finder_users`
Value: JSON string of all users (initial + registered)

## Important Notes

⚠️ **For Production:**
- ❌ Do NOT store passwords in plain text
- ❌ Do NOT use localStorage for sensitive data
- ✅ Use proper backend with:
  - Encrypted password hashing (bcrypt)
  - Secure database (MongoDB, PostgreSQL)
  - JWT authentication
  - HTTPS encryption

## Code Locations

| File | Purpose |
|------|---------|
| [src/data/mockUsers.json](src/data/mockUsers.json) | Initial mock user database |
| [src/context/AuthContext.js](src/context/AuthContext.js) | Authentication logic & localStorage management |
| [src/pages/LoginPage.js](src/pages/LoginPage.js) | Login form |
| [src/pages/RegisterPage.js](src/pages/RegisterPage.js) | Registration form |

## Testing

1. **Test Admin Login:**
   - Navigate to Login page
   - Select "Admin"
   - Enter: admin@medicine.com / admin123
   - Should see Admin Dashboard link

2. **Test Doctor Login:**
   - Select "Doctor"
   - Enter: john.smith@medicine.com / doctor123
   - Should access dashboard

3. **Test Registration:**
   - Go to Register page
   - Enter new email, name, password
   - Should auto-login and redirect
   - Check localStorage for new user

4. **Test Duplicate Email:**
   - Try registering with existing email
   - Should show error message

5. **Test Logout:**
   - Click profile menu (top-right)
   - Click Logout
   - Should return to Login page
