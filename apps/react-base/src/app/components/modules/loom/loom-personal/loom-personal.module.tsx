import React from 'react';
import { ModuleComponent } from '../../../structural/module';
import { DefaultErrorFallback } from '../../../units/DefaultErrorFallback';
import { ConnectedSelectionsLayout } from '../../../layouts/SelectionsLayout';
import { RouteLinks } from '../../../units/RouteLinks';
import { BannerLayout } from '../../../layouts/BannerLayout';
import { DevFutureFeature } from '../../../units/DevFutureFeature';
import { Link } from 'react-router-dom';
import { SimplePlaceholder } from '../../../units/SimplePlaceholder';

export const LoomPersonalModule = (props) => {
  const { match } = props;
  return (
    <div style={styles.container}>
        <div style={styles.linksContainer}>
          <p>Loom Personal Module:</p>
          <Link to={'/pairing'}>Return to Loom</Link>
          {/* <RouteLinks routes={[]} rootPath={match.path} /> */}
        </div>
        <ConnectedSelectionsLayout/>
        <ModuleComponent
          rootPath={match.path}
          noMatch={null}
          moduleName={'LoomPersonalModule'}
          routes={[]}
          fallback={DefaultErrorFallback}>
          {/* <BannerLayout title={'Loom Personal Module'}> */}
            {/* <SimplePlaceholder title={"My Stuff"}>
                <h4>Profile</h4>
                <Link to={'/'}>My Activities</Link>
                <Link to={'/'}>Interests</Link>
                <Link to={'/'}>Skills</Link>
                <Link to={'/'}>Activity History</Link>
                <h4>Connections</h4>
                <Link to={'/'}>Invites</Link>
                <Link to={'/'}>Requests</Link>
                <Link to={'/'}>Posts</Link>
            </SimplePlaceholder> */}
            <SimplePlaceholder title={"My Projects"} />
            <SimplePlaceholder title={"My Requests"} />
            <SimplePlaceholder title={"Requests To Join"} />
            <SimplePlaceholder title={"Interests"} />
            <SimplePlaceholder title={"Skills"} />
            {/* <div style={styles.subConatiner}> */}
              {/* <h2 style={styles.containerTitle}>User Space: (Work In Progress)</h2>
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
              </div> */}
              {/* <DevFutureFeature featureName={'profile interests'} title={"placeholder"} /> */}
              {/* <DevFutureFeature featureName={'profile skills'} title={"placeholder"} /> */}
            {/* </div> */}
            {/* <DevFutureFeature
              featureName={'My projects'}
              title={'placeholder'} />
            <DevFutureFeature
              featureName={'My sessions'}
              title={'placeholder'} />
            <DevFutureFeature
              featureName={'My invites'}
              title={'placeholder'} /> */}
          {/* </BannerLayout> */}
        </ModuleComponent>
    </div>
  );
}

const styles = {
  linksContainer: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    // alignItems: 'center',
    // height: '100vh',
    // width: '50%'
  },
  containerTitle: {
    color: 'lightgray',
    marginBottom: '20px'
  },
  sectionTitle: {
    // color: 'rgb(80, 80, 80)'
  },
  subConatiner: {
    animation: 'g3faceplate 1s ease',
    borderRadius: '5px',
    border: '3px dashed rgb(80,80,80)',
    background: 'gray',
    width: '50%',
    display: 'flex',
    flexFlow: 'column',
    padding: '12px',
    alignItems: 'center',
    margin: '12px',
  },
  subContainerSection: {
    margin: '12px',
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    alignItems: 'center',
    color: 'rgb(80, 80, 80)'
  }
}
