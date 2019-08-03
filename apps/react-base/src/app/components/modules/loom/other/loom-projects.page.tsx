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
    display: 'flex',
    flexFlow: 'column',
  },
}
