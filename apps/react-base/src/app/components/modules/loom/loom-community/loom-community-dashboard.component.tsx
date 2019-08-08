import React from 'react';
import { DevFutureFeature } from '../../../units/DevFutureFeature';
import { Link } from 'react-router-dom';

export const LoomCommunityDashboard = (props) => {
  return (
    <div>
      <p>Loom Community dashboard:</p>
      <div style={styles.subConatiner}>
        <h2 style={styles.containerTitle}>Community Space: (Work In Progress)</h2>
        <h3 style={styles.sectionTitle}>Community</h3>
        <div style={styles.subContainerSection}>
          <h4>Highlights</h4>
          <Link to={'/loom/community/activities'}>Weekly Stats</Link>
          <Link to={'/loom/community/activities'}>Pairing News and Events</Link>
          <h4>Explore / Find</h4>
          <Link to={'/loom/community/activities'}>Activities</Link>
          <Link to={'/loom/community/activities'}>Profiles</Link>
          {/* <Link to={'/loom/community/activities'}>Sessions</Link> */}
          {/* <Link to={'/loom/community/activities'}>Users</Link> */}
          <h4>Create</h4>
          <Link to={'/'}>Pairing Activity</Link>
          <Link to={'/'}>Exercise Activity</Link>
          {/* <Link to={'/'}>Session</Link> */}
          <h4>Broadcast</h4>
          <Link to={'/loom/community/activities'}>Shoutout</Link>
          <h4>Statistics</h4>
          <Link to={'/loom/community/activities'}>Admin Data Dashboard</Link>
        </div>
      </div>
      {/* <DevFutureFeature
        featureName={'loom community welcome'}
        title={'placeholder'} />
      <DevFutureFeature
        featureName={'loom community community dashboard info'}
        title={'placeholder'} />
      <DevFutureFeature
        featureName={'loom community activities'}
        title={'placeholder'} /> */}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    width: '100%,',
    padding: '20px',
  },
  containerTitle: {
    color: 'lightgray',
    marginBottom: '20px'
  },
  sectionTitle: {
    // color: 'rgb(80, 80, 80)'
  },
  subConatiner: {
    borderRadius: '5px',
    border: '3px dashed rgb(80,80,80)',
    background: 'gray',
    // width: '50%',
    display: 'flex',
    flexFlow: 'column',
    padding: '14px',
    alignItems: 'center',
    margin: '20px',
    animation: 'g3faceplate 1s ease',
  },
  subContainerSection: {
    margin: '14px',
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    alignItems: 'center',
    color: 'rgb(80, 80, 80)'
  }
}
