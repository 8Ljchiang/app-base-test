import React from 'react';

export const TestB = (props) => {
  return (
    <div style={styles.container}>
      <h3>TestB Component</h3>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    width: '100%'
  }
}
