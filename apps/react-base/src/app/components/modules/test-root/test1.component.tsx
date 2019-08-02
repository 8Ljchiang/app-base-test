import React from 'react';

export const TestB = (props) => {
  console.log('testB props', props);
  console.log('match', props.match.path);
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
