import React from 'react';
import { Link } from 'react-router-dom';
import { CenterLayout } from '../layouts/center.layout';

export const NotFound = (props) => {
  return (
    // <CenterLayout>
      <p>Page Not Found <Link to={'/gateway'}>Return to Gateway</Link></p>
    // </CenterLayout>
  );
}
