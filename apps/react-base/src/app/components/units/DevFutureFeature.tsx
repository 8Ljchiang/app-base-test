import React from 'react';

export const DevFutureFeature = (props) => {
  const { title, featureName } = props;
  return (
    <div style={styles.container}>
      <p style={styles.tag}>not implemented:</p>
      <p style={styles.tag}>{featureName}</p>
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
}

const styles = {
  container: {
    padding: '12px',
    margin: '12px',
    display: 'flex',
    flexFlow: 'column',
    borderRadius: '3px',
    boxShadow: '0 0 10px 5px rgb(150, 150, 150)',
    background: 'rgb(120, 120, 120)',
    border: '3px dashed rgb(80, 80, 80)',
    // border: '2px solid lightgray',
    // background: 'gray',
  },
  tag: {
    color: 'black',
  },
  title: {
    color: 'lightgray',
  }
}
