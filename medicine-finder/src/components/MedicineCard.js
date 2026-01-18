import React, { useState } from 'react';
import './MedicineCard.css';

const MedicineCard = ({ medicine }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`medicine-card ${expanded ? 'expanded' : ''}`}>
      <div className="card-header">
        <h3>{medicine.name}</h3>
        <span className="badge">{medicine.company}</span>
      </div>

      <div className="card-body">
        <div className="info-row">
          <strong>Generic Name:</strong>
          <span>{medicine.genericName}</span>
        </div>
        <div className="info-row">
          <strong>Dosage:</strong>
          <span>{medicine.dosage}</span>
        </div>
        <div className="info-row">
          <strong>Price:</strong>
          <span className="price">{medicine.price}</span>
        </div>

        {expanded && (
          <div className="expanded-content">
            <div className="symptoms-section">
              <h4>Symptoms It Treats:</h4>
              <div className="tags">
                {medicine.symptoms.map((symptom, idx) => (
                  <span key={idx} className="tag">
                    {symptom}
                  </span>
                ))}
              </div>
            </div>

            <div className="ingredients-section">
              <h4>Active Ingredients:</h4>
              <ul>
                {medicine.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="side-effects-section">
              <h4>⚠️ Possible Side Effects:</h4>
              <ul>
                {medicine.sideEffects.map((effect, idx) => (
                  <li key={idx}>{effect}</li>
                ))}
              </ul>
            </div>

            <div className="pharmacy-section">
              <h4>🏥 Available At:</h4>
              <p>{medicine.pharmacy}</p>
            </div>
          </div>
        )}
      </div>

      <div className="card-footer">
        <button
          className="expand-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '📖 Less Info' : '📖 More Info'}
        </button>
        <button className="add-btn">💾 Save</button>
      </div>
    </div>
  );
};

export default MedicineCard;
