import React from 'react';
import { ModuleComponent, ConnectedModuleComponent } from '../../../structural/module';
import { DefaultErrorFallback } from '../../../units/DefaultErrorFallback';
import { ConnectedSelectionsLayout } from '../../../layouts/SelectionsLayout';
import { RouteLinks } from '../../../units/RouteLinks';
import { BannerLayout } from '../../../layouts/BannerLayout';
import { loomCommunityRoutes } from './loom-community.routes';
import { DevFutureFeature } from '../../../units/DevFutureFeature';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const LoomCommunityModule = (props) => {
  const { match } = props;
  const root = match.path;
  return (
    <>
    {/* <div style={styles.container}> */}
      {/* <BannerLayout title={'Loom Community Module'}> */}
        <div style={styles.linksContainer}>
          <p>Loom Community Module:</p>
          <Link to={'/pairing'}>Return to Loom</Link>
          {/* <RouteLinks routes={loomCommunityRoutes} rootPath={match.path} /> */}
        </div>
        {/* <ConnectedSelectionsLayout/> */}
        <ConnectedModuleComponent
          rootPath={root}
          noMatch={null}
          moduleName={'LoomCommunityModule'}
          routes={loomCommunityRoutes}
          fallback={DefaultErrorFallback}>
        </ConnectedModuleComponent>
      {/* </BannerLayout> */}
    {/* </div> */}
    </>
  );
}

const styles = {
  linksContainer: {
    display: 'flex',
    // width: '50%',
    // justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}
