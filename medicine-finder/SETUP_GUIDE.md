# Medicine Finder - Quick Setup Guide

**Quick Start for Developers**

---

## ⚡ Quick Start (2 Minutes)

### 1. Open Terminal
```bash
cd E:\Projects\medicine-finder
```

### 2. Install & Run
```bash
npm install
npm start
```

### 3. Access Application
Open browser: **http://localhost:3000**

---

## 🔐 Login Credentials

### Admin
```
Email: admin@medicine.com
Password: admin123
```

### Doctor
```
Email: any@email.com
Password: any password (min 6 chars)
```

### Guest
```
Click "Continue as Guest"
```

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/App.js` | Main app & routing |
| `src/context/AuthContext.js` | Authentication state |
| `src/data/medicines.js` | Medicines database |
| `src/pages/DashboardPage.js` | Search interface |
| `src/pages/AdminPage.js` | Admin panel |

---

## 🎨 Key Features to Test

1. **Search** - Try searching for "Fever", "Aspirin", "Bayer"
2. **Expand Card** - Click "More Info" on any medicine
3. **Popular Tags** - Quick search filters
4. **Admin Panel** - Login as admin, visit `/admin`
5. **Responsive** - Resize browser, check mobile view

---

## 📦 Project Structure at a Glance

```
medicine-finder/
├── src/
│   ├── components/     → Reusable UI parts
│   ├── pages/          → Full page components
│   ├── context/        → State management
│   ├── data/           → Static data
│   ├── App.js          → Main file
│   └── index.js        → Entry point
├── public/
│   └── index.html      → HTML template
└── package.json        → Dependencies
```

---

## 🛠️ Useful Commands

```bash
# Start development
npm start

# Build production
npm run build

# Analyze bundle
npm run build:analyze

# Check dependencies
npm outdated

# Security audit
npm audit

# Fix vulnerabilities
npm audit fix --force
```

---

## 🎯 Testing Scenarios

### Scenario 1: Doctor Search
1. Go to http://localhost:3000
2. Login as doctor (any email, any password)
3. Search for "Headache"
4. Click "More Info" on any result
5. Check side effects and pharmacy info

### Scenario 2: Admin Management
1. Login as admin (admin@medicine.com / admin123)
2. Click "Admin Dashboard"
3. View medicines table
4. View statistics
5. Try add medicine form

### Scenario 3: Guest Access
1. Click "Continue as Guest"
2. Search for medicine
3. Try popular searches
4. Verify all features work

---

## 🎨 Design Colors

| Purpose | Color |
|---------|-------|
| Primary | #D4824C |
| Secondary | #B85D3D |
| Background | #FFF5E6 |
| Error | #FF6464 |

---

## 📊 Database Sample

**10 Medicines in System:**
- Aspirin (Bayer)
- Ibuprofen (Advil)
- Paracetamol (Calpol)
- Amoxicillin (GSK)
- Cetirizine (Cipla)
- Omeprazole (Astra Zeneca)
- Metformin (Merck)
- Lisinopril (AstraZeneca)
- Simvastatin (Merck)
- Loratadine (Cipla)

---

## ⚠️ Troubleshooting

### Port 3000 in Use?
```bash
PORT=3001 npm start
```

### npm install failing?
```bash
npm cache clean --force
rm -r node_modules
rm package-lock.json
npm install
```

### Changes not showing?
```
Hard refresh: Ctrl+Shift+R
```

---

## 📝 File Locations

| File | Path |
|------|------|
| Main App | `src/App.js` |
| Routes | `src/App.js` |
| Auth Logic | `src/context/AuthContext.js` |
| Medicines | `src/data/medicines.js` |
| Dashboard | `src/pages/DashboardPage.js` |
| Admin | `src/pages/AdminPage.js` |
| Login | `src/pages/LoginPage.js` |
| Search | `src/components/SearchBar.js` |
| Card | `src/components/MedicineCard.js` |

---

## 🚀 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start server: `npm start`
3. ✅ Test login & search
4. ✅ Read DOCUMENTATION.md for details
5. ✅ Explore code & customize

---

## 📞 Quick Reference

- **App URL:** http://localhost:3000
- **Docs:** DOCUMENTATION.md
- **ReadMe:** README.md
- **Data:** src/data/medicines.js
- **Styles:** src/**/*.css

---

**Created:** January 18, 2026  
**Version:** 1.0.0  
**Status:** ✅ Active & Running
