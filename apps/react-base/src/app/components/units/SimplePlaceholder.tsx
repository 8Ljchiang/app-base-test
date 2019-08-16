import React from 'react';

export const SimplePlaceholder = (props) => {
  const { title, children, style } = props;
  return (
    <div style={...style} className="placeholder-container">
      { title ? <h3 className="placeholder__title">{title}</h3> : null }
      { children }
    </div>
  );
}
