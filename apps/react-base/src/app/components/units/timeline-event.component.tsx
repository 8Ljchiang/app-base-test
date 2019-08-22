import React from 'react';

import './timeline-event.component.css';

export const Event = (props) => {
  const { title, subtitle, interval, children } = props;
  return (
    <li className="event-container">
      <label className="event-icon"></label>
      <div className="event-body">
        <p className="event-header">
          {interval}
        </p>
        <h3 className="event-title">
          {title}
        </h3>
        { subtitle && <h4>{subtitle}</h4> }
        <div className="event-description`">
          { children }
        </div>
      </div>
    </li>
  );
}
