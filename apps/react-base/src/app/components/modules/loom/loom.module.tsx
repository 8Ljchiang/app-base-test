import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ConnectedSelectionsLayout } from '../../layouts/SelectionsLayout';
import { RouteLinks } from '../../units/RouteLinks';
import { loomRoutes } from './loom.routes';
import { BannerLayout } from '../../layouts/BannerLayout';

export const LoomModule = (props) => {
  const { match } = props;
  console.log(match);
  return (
    <>
    {/* <div style={styles.container}> */}
      {/* <BannerLayout title={'Loom Module'}> */}
        <div style={styles.linksContainer}>
          <p>Loom Module:</p>
          <RouteLinks routes={loomRoutes} rootPath={match.path} />
        </div>
        {/* <ConnectedSelectionsLayout/> */}
        <ModuleComponent
          rootPath={match.path}
          noMatch={null}
          moduleName={'LoomModule'}
          routes={loomRoutes}
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
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  }
}
