import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { Gateway } from '../../pages/Gateway';
import { Link } from 'react-router-dom';
import { BannerLayout } from '../../layouts/BannerLayout';

export const ForgeModule = (props) => {
  const { match } = props;
  const root = match.path;
  return (
    <>
      <div style={styles.linksContainer}>
        <p>Forge Module:</p>
        <Link to={'/gateway'}>Return to Gateway</Link>
      </div>
      <ModuleComponent
        rootPath={root}
        noMatch={NotFound}
        moduleName={'ForgeModule'}
        routes={[]}
        fallback={DefaultErrorFallback}>
        <BannerLayout title={"Forge"}>
          <p>Platform for building the social foundation for project success</p>
          <p>Place to explore the social needs for projects by tracking various domain needs</p>
          <p>Providing visibility around specific requirements and requests</p>
          <p>Initiating connections with people that have shared skills and interests</p>
          <div>

          <div style={styles.rowContainer}>
            <div style={styles.rowSegment}>
              <Link to={'/forge'}><h3 style={styles.segmentTitle}>Ignite: Start the Forge</h3></Link>
            </div>
            {/* <div style={styles.rowSegment}>
              <Link to={'/loom/community'}><h3 style={styles.segmentTitle}>Community Space</h3></Link>
            </div> */}
          </div>
          </div>
        </BannerLayout>
      </ModuleComponent>
    </>
  );
}

const styles = {
  linksContainer: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  },
  rowContainer: {
    padding: '20px',
    display: 'flex',
    width: '100%',
  },
  rowSegment: {
    borderRadius: '4px',
    border: '3px dashed rgb(80,80,80)',
    background: 'gray',
    padding: '14px',
    margin: '20px',
    // width: '50%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    animation: 'g3faceplate 1s ease',
  },
  segmentTitle: {
    color: 'darkgray'
  }
}
