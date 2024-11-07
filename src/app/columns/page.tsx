import React from 'react';

const ColumnPage: React.FC = () => {
  return (
    <div>
      <h1>Health Columns</h1>
      <div className="column-list">
        <div className="column-item">
          <h2>Column Title 1</h2>
          <p>Summary of the column content...</p>
        </div>
        <div className="column-item">
          <h2>Column Title 2</h2>
          <p>Summary of the column content...</p>
        </div>
        <div className="column-item">
          <h2>Column Title 3</h2>
          <p>Summary of the column content...</p>
        </div>
        {/* Add more columns as needed */}
      </div>
    </div>
  );
};

export default ColumnPage;