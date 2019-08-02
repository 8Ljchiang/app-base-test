import React from 'react';

export const BannerLayout = (props) => {
  const { children, title } = props;
  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <h1 style={styles.headerTitle}>{title}</h1>
      </div>
      <div style={styles.body}>
        { children }
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    background: 'rgb(210, 212, 214)',
  },
  banner: {
    height: '160px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgb(34, 44, 56)',
  },
  headerTitle: {
    color: 'rgb(52, 165, 235)'
  },
  body: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  }
}
