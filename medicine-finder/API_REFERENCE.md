# Medicine Finder - API & Data Reference

**API Documentation & Data Structures**

---

## Table of Contents

1. [Data Structures](#data-structures)
2. [Context API](#context-api)
3. [Routes](#routes)
4. [Components API](#components-api)
5. [Hooks & Functions](#hooks--functions)
6. [Database Schema](#database-schema)

---

## Data Structures

### Medicine Object

```javascript
{
  id: number,                    // Unique identifier
  name: string,                  // Brand name (e.g., "Aspirin")
  company: string,               // Manufacturer (e.g., "Bayer")
  genericName: string,           // Active ingredient name
  symptoms: string[],            // Array of treatable symptoms
  dosage: string,                // Standard dosage (e.g., "500mg")
  sideEffects: string[],         // Array of possible side effects
  ingredients: string[],         // Array of active ingredients
  price: string,                 // Price range (e.g., "$5-10")
  pharmacy: string               // Pharmacy name/location
}
```

**Example:**
```javascript
{
  id: 1,
  name: 'Aspirin',
  company: 'Bayer',
  genericName: 'Acetylsalicylic Acid',
  symptoms: ['Headache', 'Fever', 'Pain'],
  dosage: '500mg',
  sideEffects: ['Nausea', 'Stomach upset'],
  ingredients: ['Acetylsalicylic Acid'],
  price: '$5-10',
  pharmacy: 'CVS Pharmacy'
}
```

### User Object

```javascript
{
  email: string,                 // User email address
  name: string                   // User display name
}
```

**Example:**
```javascript
{
  email: 'doctor@example.com',
  name: 'Dr. John'
}
```

### Search Result

```javascript
{
  medicines: Medicine[],         // Array of matching medicines
  count: number,                 // Number of results
  query: string,                 // Original search term
  timestamp: number              // Search timestamp
}
```

---

## Context API

### AuthContext

**Location:** `src/context/AuthContext.js`

#### Provider Component

```javascript
<AuthProvider>
  {children}
</AuthProvider>
```

Wraps entire app to provide authentication context.

#### Context Value

```javascript
{
  user: User | null,
  userType: 'doctor' | 'admin' | 'guest' | null,
  login: (email: string, password: string, type: string) => boolean,
  register: (email: string, password: string, name: string) => boolean,
  loginAsGuest: () => void,
  logout: () => void
}
```

### AuthContext Methods

#### `login(email, password, userType)`

Authenticates a user.

**Parameters:**
```javascript
email: string      // User email
password: string   // User password
userType: string   // 'doctor' or 'admin'
```

**Returns:** `boolean` - true if successful

**Validation:**
- Admin: email === 'admin@medicine.com' && password === 'admin123'
- Doctor: password.length >= 6
- Any email accepted for doctor

**Side Effects:**
- Sets `user` state
- Sets `userType` state
- Triggers re-render

**Example:**
```javascript
const { login } = useContext(AuthContext);
const success = login('doctor@example.com', 'password123', 'doctor');
```

#### `register(email, password, name)`

Creates a new doctor account.

**Parameters:**
```javascript
email: string      // Unique email
password: string   // Min 6 characters
name: string       // Full name
```

**Returns:** `boolean` - true if successful

**Validation:**
- Email required
- Password minimum 6 characters
- Name required

**Side Effects:**
- Creates user object
- Sets `userType` to 'doctor'
- Triggers re-render

**Example:**
```javascript
const { register } = useContext(AuthContext);
register('newdoctor@example.com', 'password123', 'Dr. Jane');
```

#### `loginAsGuest()`

Logs in as guest user (no credentials).

**Parameters:** None

**Returns:** void

**Side Effects:**
- Sets `user` with guest info
- Sets `userType` to 'guest'
- Provides limited access

**Example:**
```javascript
const { loginAsGuest } = useContext(AuthContext);
loginAsGuest();
```

#### `logout()`

Clears authentication state.

**Parameters:** None

**Returns:** void

**Side Effects:**
- Clears `user` object
- Clears `userType`
- Triggers redirect to login

**Example:**
```javascript
const { logout } = useContext(AuthContext);
logout();
```

---

## Routes

### Route Structure

```javascript
<BrowserRouter>
  <Routes>
    <Route path="/" element={...} />
    <Route path="/login" element={...} />
    <Route path="/register" element={...} />
    <Route path="/dashboard" element={...} />
    <Route path="/admin" element={...} />
  </Routes>
</BrowserRouter>
```

### Route Definitions

| Path | Component | Auth | Description |
|------|-----------|------|-------------|
| `/` | LoginPage | No | Redirect to login or dashboard |
| `/login` | LoginPage | No | Login interface |
| `/register` | RegisterPage | No | Registration form |
| `/dashboard` | DashboardPage | Yes | Main search interface |
| `/admin` | AdminPage | Yes (Admin) | Admin management panel |

### Protected Route Component

```javascript
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
};
```

**Logic:**
- Checks if `user` exists
- If yes, renders component
- If no, redirects to `/login`

---

## Components API

### Header Component

**Import:**
```javascript
import Header from './components/Header';
```

**Props:** None (uses AuthContext)

**State:**
- Derives from AuthContext

**Rendered Content:**
- Logo with navigation
- User info or Login/Register buttons
- Admin dashboard link (if admin)
- Logout button (if authenticated)

**Usage:**
```javascript
<Header />
```

### Footer Component

**Import:**
```javascript
import Footer from './components/Footer';
```

**Props:** None

**Rendered Content:**
- Company info section
- Quick links
- Features list
- Copyright & disclaimer

**Usage:**
```javascript
<Footer />
```

### SearchBar Component

**Import:**
```javascript
import SearchBar from './components/SearchBar';
```

**Props:**
```javascript
{
  onSearch: (searchTerm: string) => void
}
```

**Example:**
```javascript
const handleSearch = (term) => {
  console.log('Searching for:', term);
  // Perform search
};

<SearchBar onSearch={handleSearch} />
```

**Features:**
- Text input
- Real-time suggestions
- Enter key submission
- Suggestion click handling

### MedicineCard Component

**Import:**
```javascript
import MedicineCard from './components/MedicineCard';
```

**Props:**
```javascript
{
  medicine: {
    id: number,
    name: string,
    company: string,
    genericName: string,
    symptoms: string[],
    dosage: string,
    sideEffects: string[],
    ingredients: string[],
    price: string,
    pharmacy: string
  }
}
```

**Example:**
```javascript
const medicine = medicinesData[0];
<MedicineCard medicine={medicine} />
```

**Features:**
- Basic info display
- Expandable details
- Side effects list
- Ingredients list
- Pharmacy info
- Save button

---

## Hooks & Functions

### useContext Hook

**Usage:**
```javascript
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const { user, userType, login, logout } = useContext(AuthContext);
```

### useState Hook

**Example:**
```javascript
const [searchResults, setSearchResults] = useState([]);

setSearchResults(newResults);
```

### useNavigate Hook

**Example:**
```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/dashboard');
```

### Search Algorithm

**File:** `src/pages/DashboardPage.js`

```javascript
const handleSearch = (searchTerm) => {
  const query = searchTerm.toLowerCase();
  const results = medicinesData.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(query) ||
      medicine.genericName.toLowerCase().includes(query) ||
      medicine.company.toLowerCase().includes(query) ||
      medicine.symptoms.some((s) => s.toLowerCase().includes(query))
  );
  setSearchResults(results);
};
```

**Search Fields:**
1. Medicine name
2. Generic name
3. Company
4. Symptoms

**Case-insensitive:** Yes
**Partial matching:** Yes (includes)
**Array search:** Checks symptom array

---

## Database Schema

### Medicines Collection

```javascript
medicinesData = [
  {
    id: number,
    name: string,
    company: string,
    genericName: string,
    symptoms: string[],
    dosage: string,
    sideEffects: string[],
    ingredients: string[],
    price: string,
    pharmacy: string
  }
  // ... more medicines
]
```

### Symptoms Array

```javascript
symptoms = [
  'Headache',
  'Fever',
  'Pain',
  'Inflammation',
  'Allergy',
  'Itching',
  'Runny Nose',
  'Acid Reflux',
  'GERD',
  'Stomach Ulcer',
  'Diabetes',
  'High Blood Sugar',
  'High Blood Pressure',
  'Heart Failure',
  'High Cholesterol',
  'Heart Disease Risk',
  'Hay Fever',
  'Hives',
  'Bacterial Infection',
  'Throat Infection'
]
```

### Current Data Count

| Type | Count |
|------|-------|
| Medicines | 10 |
| Companies | 8 |
| Symptoms | 20+ |
| Pharmacies | 8 |

---

## State Management

### Global State (AuthContext)

```javascript
{
  user: {
    email: string,
    name: string
  } | null,
  userType: 'doctor' | 'admin' | 'guest' | null
}
```

### Local State (Components)

#### DashboardPage
```javascript
{
  searchResults: Medicine[],
  hasSearched: boolean,
  activeFilters: string[]
}
```

#### SearchBar
```javascript
{
  searchTerm: string,
  showSuggestions: boolean,
  suggestions: string[]
}
```

#### MedicineCard
```javascript
{
  expanded: boolean
}
```

#### LoginPage
```javascript
{
  email: string,
  password: string,
  userType: 'doctor' | 'admin',
  error: string
}
```

---

## Error Handling

### Authentication Errors

```javascript
// Invalid credentials
if (!login(email, password, userType)) {
  setError('Invalid credentials. Try admin@medicine.com / admin123');
}
```

### Search Errors

```javascript
// No results
if (searchResults.length === 0) {
  displayMessage('No medicines found matching your search');
}
```

### Validation Errors

```javascript
// Password mismatch
if (password !== confirmPassword) {
  setError('Passwords do not match');
}

// Short password
if (password.length < 6) {
  setError('Password must be at least 6 characters');
}
```

---

## HTTP Requests (Future)

### Planned API Endpoints

```
GET    /api/medicines              - Get all medicines
POST   /api/medicines              - Create medicine
GET    /api/medicines/:id          - Get medicine by ID
PUT    /api/medicines/:id          - Update medicine
DELETE /api/medicines/:id          - Delete medicine

GET    /api/search?q=term          - Search medicines
GET    /api/symptoms               - Get all symptoms
GET    /api/companies              - Get all companies

POST   /api/users/register         - Register user
POST   /api/users/login            - Login user
POST   /api/users/logout           - Logout user
GET    /api/users/profile          - Get user profile

POST   /api/interactions           - Check drug interactions
GET    /api/pharmacies             - Get pharmacies
GET    /api/pharmacies/:id/stock   - Check stock
```

### Example (Future Implementation)

```javascript
// Current (Static)
const medicinesData = require('./medicines.js');

// Future (API)
const fetchMedicines = async () => {
  const response = await fetch('/api/medicines');
  return response.json();
};

const searchMedicines = async (query) => {
  const response = await fetch(`/api/search?q=${query}`);
  return response.json();
};
```

---

## TypeScript Interfaces (Future)

```typescript
interface Medicine {
  id: number;
  name: string;
  company: string;
  genericName: string;
  symptoms: string[];
  dosage: string;
  sideEffects: string[];
  ingredients: string[];
  price: string;
  pharmacy: string;
}

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  userType: 'doctor' | 'admin' | 'guest' | null;
  login: (email: string, password: string, type: string) => boolean;
  register: (email: string, password: string, name: string) => boolean;
  loginAsGuest: () => void;
  logout: () => void;
}

interface SearchResult {
  medicines: Medicine[];
  count: number;
  query: string;
  timestamp: number;
}
```

---

## Response Examples

### Search Response

```javascript
{
  medicines: [
    {
      id: 1,
      name: 'Aspirin',
      company: 'Bayer',
      // ... other fields
    },
    {
      id: 3,
      name: 'Paracetamol',
      company: 'Calpol',
      // ... other fields
    }
  ],
  count: 2,
  query: 'fever',
  timestamp: 1642432800000
}
```

### Login Response

```javascript
{
  success: true,
  user: {
    email: 'admin@medicine.com',
    name: 'Admin'
  },
  userType: 'admin'
}
```

### Error Response

```javascript
{
  success: false,
  error: 'Invalid credentials',
  message: 'Email or password is incorrect'
}
```

---

## Rate Limiting (Future)

```javascript
// API calls per minute
const RATE_LIMITS = {
  search: 60,        // 60 searches per minute
  login: 10,         // 10 login attempts per minute
  register: 5,       // 5 registrations per minute
  adminActions: 100  // 100 admin actions per minute
};
```

---

## Caching Strategy (Future)

```javascript
const cache = {
  medicines: [],
  symptoms: [],
  companies: [],
  ttl: 3600000 // 1 hour
};

const getCachedData = (key) => {
  const cached = cache[key];
  if (cached && Date.now() - cached.timestamp < cache.ttl) {
    return cached.data;
  }
  return null;
};
```

---

**API Reference Version:** 1.0.0  
**Last Updated:** January 18, 2026  
**Status:** Documentation Complete
