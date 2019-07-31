import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { newInviteToken } from '../../redux/account.actions';

const tokens = [
  'token1',
  'token2',
  'token3',
]
class Profile extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      showInviteTokens: false
    }

    this.copyToClipBoard = this.copyToClipBoard.bind(this);
  }

  toggleInviteTokens() {
    this.setState({
      showInviteTokens: !this.state.showInviteTokens
    });
  }

  createInviteToken() {
    this.props.actions.newInviteToken();
  }

  copyToClipBoard(token) {
    console.log(token);
  }

  renderInviteTokens() {
    return this.props.inviteTokens.map((token, index) => {
      return (
        <p onClick={() => this.copyToClipBoard(token)} key={index}>{token}</p>
      );
    });
  }

  render() {
    const { showInviteTokens } = this.state;
    return (
      <div style={styles.container}>
        <h3>Profile</h3>
        <h4>Create Invite Token</h4>
        <button onClick={this.createInviteToken.bind(this)}>Create new invite token</button>
        <h4>Invite Tokens</h4>
        <button onClick={this.toggleInviteTokens.bind(this)}>Show</button>
        { showInviteTokens ? this.renderInviteTokens() : null }
      </div>
    );
  }
}

const styles = {
  container: {
    boxShadow: '0 0 4px 4px rgb(80, 80, 80)',
    borderRadius: '3px',
    background: 'gray',
    display: 'flex',
    flexFlow: 'column',
    padding: '10px',
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
    inviteTokens: state.account.inviteTokens
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      newInviteToken
    }, dispatch)
  }
}

export const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
