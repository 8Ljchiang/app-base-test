import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component<any, any> {
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

  renderNavItems() {
    return (
      <nav style={styles.menu}>
        { this.props.account.authToken === '' ?
          (
            <>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/">Home</Link>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/about/">About</Link>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/login/">Login</Link>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/signup/">Signup</Link>
            </>
          ) :
          (
            <>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/">Home</Link>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/about/">About</Link>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/users/">Users</Link>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/profile/">Profile</Link>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/gateway/">Gateway</Link>
              <Link onClick={this.toggle.bind(this)} style={styles.menuItem} to="/logout/">Logout</Link>
            </>
          )
        }
      </nav>
    );
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={this.toggle.bind(this)}>Menu</button>
        { isOpen ? this.renderNavItems() : null }
      </div>
    );
  }
}

const styles = {
  container: {
    // position: 'absolute',
    // zIndex: 100,
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    background: 'gray',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column',
    width: '100%',
    padding: '10px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '10px',
    padding: '10px',
    border: '1px solid black',
    background: 'powderblue',
  },
  button: {
    padding: '10px'
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

export const ConnectedNavigation = connect(mapStateToProps, null)(Navigation);
