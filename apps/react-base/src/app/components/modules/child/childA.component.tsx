import React from 'react';
import { ErrorBoundary } from '../../structural/error-boundary';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';

export const ChildA = (props) => {
  return (
    <div style={styles.container}>
      <h3>Child-A Component</h3>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    height: '100%',
    width: '100%'
  }
}
