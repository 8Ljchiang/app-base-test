import React from 'react';

export const SimplePlaceholder = (props) => {
  const { title, children, style } = props;
  return (
    <div style={{...style, ...styles.container }} className="placeholder-container">
      { title ? <h3 className="placeholder__title">{title}</h3> : null }
      { children }
    </div>
  );
}

const styles = {
  container: {
    animation: 'g3faceplate 1s ease'
  }
}
