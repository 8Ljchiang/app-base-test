import React, { Component } from 'react';

export class Gateway extends Component<any, any> {

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.portContainer}>
          <h3 style={styles.portTitle}>{"{ port: beacon }"}</h3>
        </div>
        <div style={styles.portContainer}>
          <h3 style={styles.portTitle}>{"{ port: loom }"}</h3>
        </div>x
        <h1>{"{ interchange: gateway }"}</h1>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    // width: '100%',
    display: 'flex',
    flexFlow: 'column',
  },
  portContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px',
    margin: '20px',
    boxShadow: '0 0 10px 5px rgb(150, 150, 150)',
    background: 'rgb(34, 44, 56)',
    borderRadius: '5px',
  },
  portTitle: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(52, 165, 235)'
  }
}
