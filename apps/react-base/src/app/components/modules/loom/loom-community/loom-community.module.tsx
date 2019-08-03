import React from 'react';
import { ModuleComponent } from '../../../structural/module';
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
          <RouteLinks routes={loomCommunityRoutes} rootPath={match.path} />
        </div>
        <ConnectedSelectionsLayout/>
        <ModuleComponent
          rootPath={match.path}
          noMatch={null}
          moduleName={'LoomCommunityModule'}
          routes={loomCommunityRoutes}
          fallback={DefaultErrorFallback}>
        </ModuleComponent>
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
