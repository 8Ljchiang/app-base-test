import React from 'react';
import { DevFutureFeature } from '../../units/DevFutureFeature';
import { Link } from 'react-router-dom';
import './loom-dashboard.component.css';
import { BannerLayout } from '../../layouts/BannerLayout';
import { SimplePlaceholder } from '../../units/SimplePlaceholder';
import { NarrowLayout } from '../../layouts/narrow.layout';
import { CenterLayout } from '../../layouts/center.layout';

export const LoomDashboard = (props) => {
  return (
    <BannerLayout title={"Pairing"}>
      <p>Platform for facillitating the pairing process and attempts to overcome barriers that prevent pairing</p>
      <p>Place to explore and create pairing activities</p>
      <p>Place to share pairing interests and opportunies</p>
      <p>Provides structure for pairing process</p>
      <p>Offers gamified experiences for pairing groups</p>

      {/* <div style={styles.rowContainer}> */}
      <CenterLayout>
        <NarrowLayout>
          <SimplePlaceholder>
            <h2>Create</h2>
            <Link to={'/loom/community/pairing-create'}><h3>Pairing Activity</h3></Link>
          </SimplePlaceholder>

          <SimplePlaceholder>
            <h2>Profile</h2>
            <Link to={'/loom/personal'}><h3>My Stuff</h3></Link>
          </SimplePlaceholder>

          <SimplePlaceholder>
            <h2>Community</h2>
            <Link to={'/loom/community'}><h3>Available Activities</h3></Link>
            <Link to={'/loom/community'}><h3>Users</h3></Link>
          </SimplePlaceholder>
        </NarrowLayout>
      </CenterLayout>


        {/* <div style={styles.rowSegment}>
          <Link to={'/loom/personal'}><h3 style={styles.segmentTitle}>My Stuff</h3></Link>
        </div>
        <div style={styles.rowSegment}>
          <Link to={'/loom/community'}><h3 style={styles.segmentTitle}>Community Space</h3></Link>
        </div> */}
      {/* </div> */}
      {/* <div style={styles.container}> */}
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
        {/* </div> */}
    </BannerLayout>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    width: '100%,',
    padding: '20px',
  },
  rowContainer: {
    padding: '20px',
    display: 'flex',
    // flexFlow: 'column',
    width: '100%',
  },
  rowSegment: {
    borderRadius: '4px',
    border: '3px dashed rgb(80,80,80)',
    background: 'gray',
    padding: '14px',
    margin: '20px',
    width: '50%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    animation: 'g3faceplate 1s ease',
  },
  segmentTitle: {
    color: 'darkgray'
  }
}
