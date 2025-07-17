// src/components/ContentCard.jsx
import React from 'react';

const ContentCard = ({ title, subtitle, period, description, image, reverse = false }) => {
  return (
    <div className={`content-card ${reverse ? 'reverse' : ''}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-text">
        <div className="experience-header">
          <h2>{title}</h2>
          {subtitle && <h3>{subtitle}</h3>}
          {period && <div className="experience-period">{period}</div>}
        </div>
        {description && (
          <div className="experience-description">
            {Array.isArray(description) ? (
              <ul>
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;