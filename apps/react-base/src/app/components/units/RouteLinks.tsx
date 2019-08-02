import React from 'react';
import { Link } from 'react-router-dom';

export const RouteLinks = (props) => {
  const { routes } = props;
  if (routes) {
    return routes.map((r, index) => {
      return (
        <Link key={index} to={r.path}>{r.path}</Link>
      );
    });
  }
}
