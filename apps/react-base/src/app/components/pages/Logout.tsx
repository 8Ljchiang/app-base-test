import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../redux/account.actions';

class Logout extends Component<any, any> {
  logout() {
    this.props.actions.logout();
  }

  render() {
    return (
      <div style={styles.container}>
        <h3>Log Out</h3>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    );
  }
}

const styles = {
  container: {
    borderRadius: '3px',
    background: 'gray',
    display: 'flex',
    flexFlow: 'column',
    padding: '10px',
    alignItems: 'center',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      logout
    }, dispatch)
  }
}

export const ConnectedLogout = connect(null, mapDispatchToProps)(Logout);
