import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = (props) => {
  return (
    <p>Not Found <Link to={'/gateway'}>Return to Gateway</Link></p>
  );
}
