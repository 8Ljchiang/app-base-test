import React, { Component } from 'react';

export class LoomExercisesPage extends Component<any, any> {
  render() {
    return (
      <div style={styles.container}>
        <h1>{"{ loom: exercises }"}</h1>
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
