import React, { Component } from 'react';
import { ConnectedLoginForm } from './login-form.component';
import { ConnectedSignupForm } from './signup-form.component';

export class AccessPort extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true
    }

    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState({
      isLogin: !this.state.isLogin
    });
  }

  render() {
    const { isLogin } = this.state;
    const buttonTitle = isLogin ? 'Signup' : 'Login';
    return (
      <>
        { isLogin ? (<ConnectedLoginForm/>) : (<ConnectedSignupForm/>) }
        <button style={styles.buttonStyle} onClick={this.toggleLogin}>{buttonTitle}</button>
      </>
    );
  }
}

const styles = {
  buttonStyle: {
    padding: '5px 16px',
    color: 'lightgray',
    borderRadius: '3px',
    background: 'rgb(34, 44, 56)',
  }
}
