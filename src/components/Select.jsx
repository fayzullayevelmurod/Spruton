import React from 'react';

export const Select = ({ selectWeek, handleShowSelect, onSelect }) => {
  const handleSelect = (text) => {
    onSelect(text);
    handleShowSelect();
  };

  return (
    <>
      <div className={`custom-select ${selectWeek ? 'show' : ''}`}>
        <ul>
          <li onClick={() => handleSelect('Day')}>Day</li>
          <li onClick={() => handleSelect('Week')}>Week</li>
          <li onClick={() => handleSelect('Month')}>Month</li>
          <li onClick={() => handleSelect('Year')}>Year</li>
        </ul>
        <button onClick={handleShowSelect} className="cencle-btn">
          Cancel
        </button>
      </div>
    </>
  );
};
