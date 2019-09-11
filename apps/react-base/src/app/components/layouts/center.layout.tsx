import React from 'react';

export const CenterLayout = (props) => {
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
    alignItems: 'center',
    overflow: 'auto',
	width: '100%',
  }
}
