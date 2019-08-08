import React from 'react';
import { DevFutureFeature } from '../../units/DevFutureFeature';
import { Link } from 'react-router-dom';
import './loom-dashboard.component.css';

export const LoomDashboard = (props) => {
  return (
    <div style={styles.container}>
      {/* Welcome to Loom: Loom Dashboard */}
      {/* <DevFutureFeature
        featureName={'loom description and welcome'}
        title={'placeholder'} />
      <DevFutureFeature
        featureName={'loom my stuff'}
        title={'placeholder'} />
      <DevFutureFeature
        featureName={'loom community'}
        title={'placeholder'} /> */}
      <div style={styles.subConatiner}>
        <h2 style={styles.containerTitle}>Placeholder: (Work In Progress)</h2>
        <h3 style={styles.sectionTitle}>My Stuff</h3>
        <div style={styles.subContainerSection}>
          <h4>Profile</h4>
          <Link to={'/'}>My Activities</Link>
          <Link to={'/'}>Interests</Link>
          <Link to={'/'}>Skills</Link>
          <Link to={'/'}>Activity History</Link>
          <h4>Connections</h4>
          <Link to={'/'}>Invites</Link>
          <Link to={'/'}>Requests</Link>
          <Link to={'/'}>Posts</Link>
        </div>
        <DevFutureFeature featureName={'profile interests'} title={"placeholder"} />
        <DevFutureFeature featureName={'profile skills'} title={"placeholder"} />
      </div>
      <div style={styles.subConatiner}>
        <h2 style={styles.containerTitle}>Placeholder: (Work In Progress)</h2>
        <h3 style={styles.sectionTitle}>Community</h3>
        <div style={styles.subContainerSection}>
          <h4>Explore / Find</h4>
          <Link to={'/loom/community/activities'}>Activities</Link>
          <Link to={'/loom/community/activities'}>Sessions</Link>
          <Link to={'/loom/community/activities'}>Posts</Link>
          <Link to={'/loom/community/activities'}>Users</Link>
          <h4>Create</h4>
          <Link to={'/'}>Pairing Activity</Link>
          <Link to={'/'}>Exercise</Link>
          <Link to={'/'}>Session</Link>
          <h4>Connect</h4>
          <h4>Discuss</h4>
          <h4>Statistics</h4>
        </div>
      </div>
    </div>);
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
    width: '50%',
    display: 'flex',
    flexFlow: 'column',
    padding: '14px',
    alignItems: 'center',
    margin: '20px',
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
