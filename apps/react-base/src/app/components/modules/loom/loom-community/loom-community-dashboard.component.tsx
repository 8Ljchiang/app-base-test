import React from 'react';
import { DevFutureFeature } from '../../../units/DevFutureFeature';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../../../units/SimplePlaceholder';

export const LoomCommunityDashboard = (props) => {
  return (
    <>
      <p>Loom Community Dashboard Component: <Link to={'/pairing/community/dashboard'}>Return to Loom Community Dashboard</Link></p>
      <div style={styles1.container}>
        <SimplePlaceholder title={"Create"}>
          <Link to={'/pairing/community/pairing-create'} style={styles1.linkStyle}><p>Pairing Activity</p></Link>
        </SimplePlaceholder>
        <SimplePlaceholder title={"Explore / Find"}>
          <Link to={'/pairing/community/activities'} style={styles1.linkStyle}><p>Activities</p></Link>
          <Link to={'/pairing/community/profiles'} style={styles1.linkStyle}><p>Profiles</p></Link>
          <Link to={'/pairing/community/posts'} style={styles1.linkStyle}><p>Posts</p></Link>
        </SimplePlaceholder>
        {/* <div style={styles1.containerColumn}>
          <h2>Create</h2>
          <Link to={'/loom/community/pairing-create'} style={styles1.linkStyle}><p>Pairing Activity</p></Link>
        </div>
        <div style={styles1.containerColumn}>
          <h2>Explore / Find</h2>
          <Link to={'/loom/community/activities'} style={styles1.linkStyle}><p>Activities</p></Link>
          <Link to={'/loom/community/profiles'} style={styles1.linkStyle}><p>Profiles</p></Link>
          <Link to={'/loom/community/posts'} style={styles1.linkStyle}><p>Posts</p></Link>
        </div> */}
      </div>
    </>
  );
}

const styles1 = {
  container: {
    display: 'flex',
    width: '100%',
    // height: '100%',
  },
  containerColumn: {
    display: 'flex',
    flexFlow: 'column',
    width: '50%',
    border: '2px gray dashed',
    margin: '20px',
    padding: '12px',
    // height: '100%',
  },
  sectionContainer: {
    display: 'flex',
    flexFlow: 'column',
  },
  linkStyle: {
    color: 'black',
  }
}

export const LoomCommunityDashboard2 = (props) => {
  return (
    <div>
      <p>Loom Community dashboard:</p>
      <div style={styles.subConatiner}>
        <h2 style={styles.containerTitle}>Community Space: (Work In Progress)</h2>
        <h3 style={styles.sectionTitle}>Community</h3>
        <div style={styles.subContainerSection}>
          <h4>Highlights</h4>
          <Link to={'/pairing/community/activities'}>Weekly Stats</Link>
          <Link to={'/pairing/community/activities'}>Pairing News and Events</Link>
          <h4>Explore / Find</h4>
          <Link to={'/pairing/community/activities'}>Activities</Link>
          <Link to={'/pairing/community/activities'}>Profiles</Link>
          {/* <Link to={'/pairing/community/activities'}>Sessions</Link> */}
          {/* <Link to={'/pairing/community/activities'}>Users</Link> */}
          <h4>Create</h4>
          <Link to={'/'}>Pairing Activity</Link>
          <Link to={'/'}>Exercise Activity</Link>
          {/* <Link to={'/'}>Session</Link> */}
          <h4>Broadcast</h4>
          <Link to={'/pairing/community/activities'}>Shoutout</Link>
          <h4>Statistics</h4>
          <Link to={'/pairing/community/activities'}>Admin Data Dashboard</Link>
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
