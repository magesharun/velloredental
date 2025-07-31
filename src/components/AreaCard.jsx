import React from 'react';

const AreaCard = ({ name, distance }) => {
  return (
    <div className="area-card">
      <span role="img" aria-label="location" className="icon">📍</span>
      <h3>{name}</h3>
      <p>{distance}</p>
    </div>
  );
};

export default AreaCard;
