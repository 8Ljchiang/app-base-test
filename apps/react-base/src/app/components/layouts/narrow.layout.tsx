import React from 'react';

export const NarrowLayout = (props) => {
  const { children } = props;
  return (
    <div style={styles.container}>
      { children }
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    width: '500px',
    overflow: 'auto'
  }
}
