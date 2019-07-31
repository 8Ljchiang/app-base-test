import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { newInviteToken, addFeatureKey, updateStatus } from '../../redux/account.actions';
import { EditableField } from '../../components/units/EditableField';
import { AppFeature } from '../../core/configs/feature.config';

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

  updateStatus(value: string): void {
    const { inviteTokens } = this.props;
    this.props.actions.updateStatus(value);
  }

  addFeatureKey(value: string): void {
    this.props.actions.addFeatureKey(value);
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
    const { profile, featureKeys } = this.props;
    const username = this.props.username ? this.props.username : 'unknown';
    const showFeatureUnlock = featureKeys.includes(AppFeature.FEATURE_UNLOCK);
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <h3>Profile</h3>
          <h4>Create Invite Token</h4>
          <button onClick={this.createInviteToken.bind(this)}>Create new invite token</button>
          <h4>Invite Tokens</h4>
          <button onClick={this.toggleInviteTokens.bind(this)}>Show</button>
          { showInviteTokens ? this.renderInviteTokens() : null }
        </div>
        <div style={styles.right}>
          <h3>Account Information</h3>
          <h4>Username:</h4>
          <EditableField value={username} save={() => null} />
          <h4>Status:</h4>
          <EditableField value={profile.status} save={this.updateStatus.bind(this)} />
          { showFeatureUnlock ? (
            <>
              <h4>Feature Unlock:</h4>
              <div>
                <input type="text" placeholder="feature" />
                <button>Submit</button>
              </div>
            </>
          ): (
            null
          ) }
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  left: {
    marginTop: '30px',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    padding: '20px',
    width: '520px',
    background: 'lightgray',
    border: '1px solid black',
  },
  right: {
    marginTop: '30px',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    flex: 1,
    alignItems: 'end',
    padding: '20px',
    background: 'gray',
  },
  other: {
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
    inviteTokens: state.account.inviteTokens,
    featureKeys: state.account.featureKeys,
    profile: state.account.profile,
    username: state.account.displayIdentifier,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      newInviteToken,
      addFeatureKey,
      updateStatus
    }, dispatch)
  }
}

export const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
