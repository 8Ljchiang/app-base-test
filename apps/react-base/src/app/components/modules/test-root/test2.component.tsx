import React from 'react';

export const TestA = (props) => {
  console.log('match', props.match.path);
  return (
    <div style={styles.container}>
      <h3>TestA Component</h3>
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
