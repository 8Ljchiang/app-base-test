import React, { Component } from 'react';

export class ReduxStore extends Component<any, any> {
  render() {
    const storeString = JSON.stringify(this.props.store, null, 2);
    return (
      <div style={styles.container}>
        <pre>
          <code>
            { storeString }
          </code>
        </pre>
      </div>
    );
  }
}

const styles = {
  container: {
    maxHeight: '500px',
    overflow: 'auto',
    borderRadius: '3px',
    background: 'gray',
    border: '1px solid black',
    display: 'flex',
    flexFlow: 'column',
    padding: '10px',
    alignItems: 'center',
  }
}

// const mapStateToProps = (state) => {
//   return {
//     rootStore: state
//   }
// }

// export const ConnectedReduxStore = connect(mapStateToProps, null)(ReduxStore)
