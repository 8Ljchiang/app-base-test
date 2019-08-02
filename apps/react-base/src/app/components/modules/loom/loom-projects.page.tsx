import React, { Component } from 'react';

export class LoomProjectsPage extends Component<any, any> {
  render() {
    return (
      <div style={styles.container}>
        <h1>{"{ loom: projects }"}</h1>
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
  metaContainer:{
    display: 'flex',
    flexFlow: 'column',
    margin: '20px'
  },
  tag: {
    marginLeft: '8px',
    color: 'rgb(34, 44, 56)'
  },
  portContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px',
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
  },
  portDescription: {
    color: 'white',
  }
}
