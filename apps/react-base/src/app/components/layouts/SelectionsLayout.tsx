import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReduxStore } from '../units/ReduxStore';
import { ConnectedNavigation } from '../units/Navigation';

class SelectionsLayout extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      selection: null
    }
  }

  select(value: number) {
    if (this.state.selection === value) {
      this.setState({
        selection: null
      });
    } else {
      this.setState({
        selection: value
      });
    }
  }

  renderSelection() {
    switch(this.state.selection) {
      case 1:
        return null;
      case 2:
        return <ConnectedNavigation/>;
      case 3:
        return null;
      case 4:
        return <ReduxStore store={this.props.rootStore} />
      default:
        return null;
    }
  }

  render() {
    const isLoggedIn = this.props.rootStore.account.authToken !== '';
    return (
      <div style={styles.pageContainer}>
        { isLoggedIn ? (
            <>
              <div style={styles.selectionsContainer}>
                <div onClick={() => this.select(1)} style={styles.actionContainer}>
                  <p>A</p>
                </div>
                <div onClick={() => this.select(2)} style={styles.actionContainer}>
                  <p>N</p>
                </div>
                <div onClick={() => this.select(3)} style={styles.actionContainer}>
                  <Link to={'/account'}>P</Link>
                </div>
                <div onClick={() => this.select(4)} style={styles.actionContainer}>
                  <p>R</p>
                </div>
              </div>
              <div style={styles.selectionAreaContainer}>
                { this.renderSelection() }
              </div>
            </>
        ) : null }
      </div>
    );
  }
}

const styles = {
  pageContainer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    zIndex: 100,
  },
  selectionsContainer: {
    display: 'flex'
  },
  actionContainer: {
    height: '50px',
    width: '50px',
    padding: '6px',
    margin: '14px',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '3px solid white',
    background: 'rgb(227, 59, 79)',
    boxShadow: '0 0 3px 3px rgb(75, 75, 75)'
  },
  selectionAreaContainer: {
    margin: '20px',
  }
}

const mapStateToProps = (state) => {
  return {
    rootStore: state
  }
}

export const ConnectedSelectionsLayout = connect(mapStateToProps, null)(SelectionsLayout)
