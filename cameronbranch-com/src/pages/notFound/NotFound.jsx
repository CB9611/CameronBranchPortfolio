import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="error-code">404</div>
      <h1 className="error-message">System Error: Page Not Found</h1>
      <p className="error-subtext">
        It looks like the path you're looking for has been moved or doesn't exist in this directory.
      </p>
      <Link to="/" className="home-button">
        Let's go home
      </Link>
    </div>
  );
};

export default NotFound;