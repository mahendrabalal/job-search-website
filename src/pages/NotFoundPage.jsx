import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFoundPage.css"

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="container">
        <h1>404</h1>
        <p>Oops! The page you are looking for cannot be found.</p>
        <Link to="/" className="button">Go to Homepage</Link>
      </div>
    </div>
  );
};

export default PageNotFound;