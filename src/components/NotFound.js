import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <div className="text-center">
      <h2>This page doesn't exist</h2>
      <Link to="/">Go back to homepage</Link>
    </div>
  </>
);

export default NotFound;
