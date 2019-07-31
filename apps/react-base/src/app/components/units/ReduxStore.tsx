import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxStore extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const storeString = JSON.stringify(this.props.rootStore, null, 2);
    return (
      <div style={styles.container}>
        {
          isOpen ? (
            <pre>
              <code>
                { storeString }
              </code>
            </pre>
          ) : null
        }
        <button onClick={this.toggle.bind(this)}>Redux Store</button>
      </div>
    );
  }
}

const styles = {
  container: {
    maxHeight: '500px',
    overflow: 'auto',
    bottom: 0,
    borderRadius: '3px',
    background: 'gray',
    display: 'flex',
    flexFlow: 'column',
    padding: '10px',
    alignItems: 'center',
    position: 'absolute',
  }
}

const mapStateToProps = (state) => {
  return {
    rootStore: state
  }
}

export const ConnectedReduxStore = connect(mapStateToProps, null)(ReduxStore)
