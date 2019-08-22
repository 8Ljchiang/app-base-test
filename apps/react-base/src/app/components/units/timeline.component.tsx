import React from 'react';

import './timeline.component.css'

export const Timeline = ({ children }) => {
  return (
    <div>
      <ul className="timeline-container">
        { children }
      </ul>
    </div>
  );
}
