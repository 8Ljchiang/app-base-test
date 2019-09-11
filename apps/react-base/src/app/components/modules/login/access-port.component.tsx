import React, { Component } from 'react';
import { ConnectedLoginForm } from '../../forms/login-form.component';
import { ConnectedSignupForm } from '../../forms/signup-form.component';
import { SimplePlaceholder } from '../../units/SimplePlaceholder';

export class AccessPort extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true
    }

    this.toggleLogin = this.toggleLogin.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setSignup = this.setSignup.bind(this);
  }

  toggleLogin() {
    this.setState({
      isLogin: !this.state.isLogin
    });
  }

  setLogin() {
    this.setState({
      isLogin: true
    });
  }

  setSignup() {
    this.setState({
      isLogin: false
    });
  }

  render() {
    const { isLogin } = this.state;
    const buttonTitle = isLogin ? 'Signup' : 'Login';
    return (
      <>
        <div style={styles.buttonContainer}>
          <SimplePlaceholder>
            <button style={styles.buttonStyle} onClick={this.setLogin}>Login</button>
            <button style={styles.buttonStyle} onClick={this.setSignup}>Signup</button>
          </SimplePlaceholder>
        </div>
        { isLogin ? (<ConnectedLoginForm/>) : (<ConnectedSignupForm/>) }
      </>
    );
  }
}

const styles = {
  buttonContainer: {
    display: 'flex',
    // position: 'absolute',
    bottom: 0,
    // flex: 1
    // width: '100%'
  },
  buttonStyle: {
    padding: '5px 16px',
    color: 'lightgray',
    borderRadius: '3px',
    background: 'rgb(34, 44, 56)',
    // flex: 1,
    // width: '50%'
  }
}
