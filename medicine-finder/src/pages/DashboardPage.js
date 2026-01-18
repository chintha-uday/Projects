import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MedicineCard from '../components/MedicineCard';
import { medicinesData } from '../data/medicines';
import './DashboardPage.css';

const DashboardPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

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
    setHasSearched(true);
    setActiveFilters([searchTerm]);
  };

  const clearSearch = () => {
    setSearchResults([]);
    setHasSearched(false);
    setActiveFilters([]);
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="search-section">
          <h1 className="welcome-title">🏥 Find Your Medicine</h1>
          <p className="subtitle">Search by symptoms, drug name, or company</p>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="content-wrapper">
          <div className="results-section">
            {hasSearched ? (
              <>
                <div className="results-header">
                  <h2>Search Results</h2>
                  <span className="result-count">
                    {searchResults.length} medicine(s) found
                  </span>
                </div>

                {activeFilters.length > 0 && (
                  <div className="filters-display">
                    <span className="filter-label">Filters:</span>
                    {activeFilters.map((filter, idx) => (
                      <span key={idx} className="filter-tag">
                        {filter}
                        <button
                          onClick={() => {
                            const newFilters = activeFilters.filter((_, i) => i !== idx);
                            setActiveFilters(newFilters);
                            if (newFilters.length === 0) clearSearch();
                          }}
                          className="remove-filter"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                    <button onClick={clearSearch} className="clear-all">
                      Clear All
                    </button>
                  </div>
                )}

                {searchResults.length > 0 ? (
                  <div className="medicines-list">
                    {searchResults.map((medicine) => (
                      <MedicineCard key={medicine.id} medicine={medicine} />
                    ))}
                  </div>
                ) : (
                  <div className="no-results">
                    <p>❌ No medicines found matching your search.</p>
                    <p>Try searching with different symptoms or drug names.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">💊</div>
                <h2>Welcome to Medicine Finder</h2>
                <p>Use the search bar above to find medicines by:</p>
                <ul>
                  <li>📋 Symptoms (e.g., Fever, Headache)</li>
                  <li>💊 Drug name (e.g., Aspirin)</li>
                  <li>🏢 Company name (e.g., Bayer)</li>
                  <li>🔬 Active ingredients</li>
                </ul>
                <p style={{ marginTop: '1.5rem', color: '#999' }}>
                  Get detailed information about dosage, side effects, and where to find them!
                </p>
              </div>
            )}
          </div>

          <aside className="sidebar">
            <div className="sidebar-card">
              <h3>💡 Quick Tips</h3>
              <ul>
                <li>Check side effects before taking</li>
                <li>Consult doctor for interactions</li>
                <li>Always verify pharmacy availability</li>
                <li>Read dosage instructions carefully</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>📊 Popular Searches</h3>
              <div className="popular-tags">
                {['Fever', 'Headache', 'Allergy', 'Pain', 'Infection'].map((tag, idx) => (
                  <button
                    key={idx}
                    className="popular-tag"
                    onClick={() => handleSearch(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-card warning">
              <h3>⚠️ Important</h3>
              <p>
                This application is for informational purposes only. Always consult a healthcare professional before taking any medicine.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
