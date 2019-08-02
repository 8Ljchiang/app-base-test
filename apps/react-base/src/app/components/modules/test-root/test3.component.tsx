import React from 'react';

export const TestC = (props) => {
  return (
    <div style={styles.container}>
      <h3>TestC Component</h3>
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
