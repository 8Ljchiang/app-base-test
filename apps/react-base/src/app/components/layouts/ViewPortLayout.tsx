import React from 'react';

export const ViewPortLayout = (props) => {
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
    height: '100vh',
    width: '100%',
    background: 'rgb(210, 212, 214)',
  }
}
