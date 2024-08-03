import React from 'react';
import { Button } from 'primereact/button';
export const NotFound = ({ showNotFound, toggleNotFound }) => {
  return (
    <>
      <div className={`overlay ${showNotFound ? 'show' : ''}`}></div>
      <div className={`not-found modal ${showNotFound ? 'show' : ''}`}>
        <div className="content-box">
          <h1>OOPS!</h1>
          <span className="text">
            This box is empty. <br /> Try another time.
          </span>
        </div>
        <Button
          className="go-btn"
          label="Try again"
          severity="help"
          onClick={toggleNotFound}
        />
      </div>
    </>
  );
};
