import React from 'react';

export const ChildB = (props) => {
  return (
    <div style={styles.container}>
      <h3>Child-B Component</h3>
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
