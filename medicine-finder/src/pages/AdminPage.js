import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { AuthContext } from '../context/AuthContext';
import { medicinesData } from '../data/medicines';
import './AdminPage.css';

const AdminPage = () => {
  const { userType } = useContext(AuthContext);
  const navigate = useNavigate();

  if (userType !== 'admin') {
    return (
      <>
        <Header />
        <div className="access-denied">
          <h2>❌ Access Denied</h2>
          <p>Only administrators can access this page.</p>
          <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
        </div>
      </>
    );
  }

  const stats = {
    totalMedicines: medicinesData.length,
    totalCompanies: new Set(medicinesData.map((m) => m.company)).size,
    totalSymptoms: new Set(medicinesData.flatMap((m) => m.symptoms)).size,
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <div className="admin-header">
          <h1>🔐 Admin Dashboard</h1>
          <p>Manage medicines database and system statistics</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">💊</div>
            <div className="stat-content">
              <h3>Total Medicines</h3>
              <p className="stat-number">{stats.totalMedicines}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🏢</div>
            <div className="stat-content">
              <h3>Companies</h3>
              <p className="stat-number">{stats.totalCompanies}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔬</div>
            <div className="stat-content">
              <h3>Symptoms Covered</h3>
              <p className="stat-number">{stats.totalSymptoms}</p>
            </div>
          </div>
        </div>

        <div className="admin-sections">
          <section className="admin-section">
            <h2>📋 Medicines Database</h2>
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Medicine Name</th>
                    <th>Company</th>
                    <th>Generic Name</th>
                    <th>Dosage</th>
                    <th>Pharmacy</th>
                    <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicinesData.map((medicine) => (
                  <tr key={medicine.id}>
                    <td>{medicine.id}</td>
                    <td className="medicine-name">{medicine.name}</td>
                    <td>{medicine.company}</td>
                    <td>{medicine.genericName}</td>
                    <td>{medicine.dosage}</td>
                    <td>{medicine.pharmacy}</td>
                    <td className="actions">
                      <button className="edit-btn">✏️</button>
                      <button className="delete-btn">🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </section>

          <section className="admin-section">
            <h2>➕ Add New Medicine</h2>
            <form className="admin-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Medicine Name</label>
                  <input type="text" placeholder="Enter medicine name" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Enter company name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Generic Name</label>
                  <input type="text" placeholder="Enter generic name" />
                </div>
                <div className="form-group">
                  <label>Dosage</label>
                  <input type="text" placeholder="e.g., 500mg" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price</label>
                  <input type="text" placeholder="e.g., $10-20" />
                </div>
                <div className="form-group">
                  <label>Pharmacy</label>
                  <input type="text" placeholder="Enter pharmacy name" />
                </div>
              </div>

              <div className="form-group">
                <label>Active Ingredients (comma separated)</label>
                <input type="text" placeholder="e.g., Aspirin, Caffeine" />
              </div>

              <div className="form-group">
                <label>Side Effects (comma separated)</label>
                <input type="text" placeholder="e.g., Nausea, Headache" />
              </div>

              <button type="submit" className="submit-btn">
                ➕ Add Medicine
              </button>
            </form>
          </section>

          <section className="admin-section">
            <h2>📊 System Analytics</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <h4>Most Common Symptom</h4>
                <p>Headache (3 medicines)</p>
              </div>
              <div className="analytics-card">
                <h4>Popular Company</h4>
                <p>Cipla (3 medicines)</p>
              </div>
              <div className="analytics-card">
                <h4>Avg. Price Range</h4>
                <p>$10-$25</p>
              </div>
              <div className="analytics-card">
                <h4>Pharmacies</h4>
                <p>8 registered</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
