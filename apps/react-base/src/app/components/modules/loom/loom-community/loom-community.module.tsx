import React from 'react';
import { ModuleComponent, ConnectedModuleComponent } from '../../../structural/module';
import { DefaultErrorFallback } from '../../../units/DefaultErrorFallback';
import { ConnectedSelectionsLayout } from '../../../layouts/SelectionsLayout';
import { RouteLinks } from '../../../units/RouteLinks';
import { BannerLayout } from '../../../layouts/BannerLayout';
import { loomCommunityRoutes } from './loom-community.routes';

export const LoomCommunityModule = (props) => {
  const { match } = props;
  return (
    <>
    {/* <div style={styles.container}> */}
      {/* <BannerLayout title={'Loom Community Module'}> */}
        <div style={styles.linksContainer}>
          <p>Loom Community Module:</p>
          <RouteLinks routes={loomCommunityRoutes} rootPath={match.path} />
        </div>
        <ConnectedSelectionsLayout/>
        <ConnectedModuleComponent
          rootPath={match.path}
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
    width: '50%',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  }
}
