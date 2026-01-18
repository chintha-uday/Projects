# Medicine Finder - React Application

A comprehensive web application designed to help doctors find medicines from different companies with the same active drug.

## Features

✅ **User Authentication**
- Doctor Login & Registration
- Admin Login
- Guest Access

✅ **Search & Filter**
- Search by Symptom
- Search by Drug Name
- Search by Company
- Search by Active Ingredients

✅ **Drug Information**
- Complete drug details
- Dosage information
- Side effects
- Active ingredients
- Pharmacy availability
- Price ranges

✅ **Additional Features**
- Drug interactions checking
- Pharmacy locator
- Luxury warm color design
- Responsive across all devices
- Admin dashboard for managing medicines

## Project Structure

```
medicine-finder/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Footer.js & Footer.css
│   │   ├── SearchBar.js & SearchBar.css
│   │   └── MedicineCard.js & MedicineCard.css
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── DashboardPage.js
│   │   ├── AdminPage.js
│   │   └── AuthPages.css & others
│   ├── context/
│   │   └── AuthContext.js
│   ├── data/
│   │   └── medicines.js
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── index.html
└── package.json
```

## Installation

1. Navigate to project directory:
```bash
cd E:\Projects\medicine-finder
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Application will run on `http://localhost:3000`

## Test Credentials

### Admin Login
- Email: `admin@medicine.com`
- Password: `admin123`

### Doctor Login
- Email: Any email address
- Password: Any password (minimum 6 characters)

### Guest Access
- Click "Continue as Guest" for sample access

## Key Components

### Header
- Sticky navigation bar with warm gradient
- User info display
- Quick logout option

### Search Bar
- Smart suggestions dropdown
- Search by symptoms, drugs, companies
- Real-time filtering

### Medicine Card
- Expandable medicine details
- Shows symptoms, ingredients, side effects
- Save feature
- Pharmacy information

### Dashboard
- Main search interface
- Results sidebar
- Popular searches
- Quick tips for users

### Admin Dashboard
- Medicine database management
- Statistics and analytics
- Add/Edit/Delete medicines
- System monitoring

## Color Scheme

**Warm Luxury Colors:**
- Primary: `#D4824C` (Warm Gold)
- Secondary: `#B85D3D` (Burnt Sienna)
- Accent: `#8B6239` (Dark Tan)
- Light: `#FFE4CC` (Peach)
- Background: `#FFF5E6` (Cream)

## Technologies Used

- React 18.2.0
- React Router DOM 6.8.0
- CSS3 (Grid, Flexbox, Animations)
- Context API for State Management

## Features Implementation

### Search Functionality
- Real-time search across medicines database
- Filter by multiple criteria
- Suggestion dropdown

### Authentication
- Role-based access (Doctor, Admin, Guest)
- Protected routes
- Session management via Context API

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop layouts
- Adaptive UI components

## Sample Data

The application includes 10 sample medicines with:
- 8 different pharmaceutical companies
- 20+ different symptoms
- Complete drug information
- Multiple pharmacy locations

## Future Enhancements

- Integration with real pharmacy APIs
- Medicine interaction checker
- User favorites/saved medicines
- Rating and reviews system
- Email notifications
- Database backend (MongoDB/PostgreSQL)
- Medical AI recommendations

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Important Notice

**Disclaimer:** This application is for informational purposes only. Always consult a healthcare professional before taking any medicine.

## License

MIT License - Feel free to use and modify

## Author

Medicine Finder Team

---

**Enjoy your Medicine Finder experience! 💊**
