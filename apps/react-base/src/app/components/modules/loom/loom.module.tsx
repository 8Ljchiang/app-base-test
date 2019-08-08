import React from 'react';
import { ModuleComponent, ConnectedModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ConnectedSelectionsLayout } from '../../layouts/SelectionsLayout';
import { RouteLinks } from '../../units/RouteLinks';
import { loomRoutes } from './loom.routes';
import { BannerLayout } from '../../layouts/BannerLayout';
import { DevFutureFeature } from '../../units/DevFutureFeature';
import { Redirect, Link } from 'react-router-dom';

export const LoomModule = (props) => {
  const { match } = props;
  const root = match.path;
  // console.log(match);
  return (
    <>
    {/* <div style={styles.container}> */}
      {/* <BannerLayout title={'Loom Module'}> */}
        <div style={styles.linksContainer}>
          <p>Loom Module:</p>
          <Link to={'/gateway'}>Return to Gateway</Link>
          {/* <RouteLinks routes={loomRoutes} rootPath={match.path} /> */}
        </div>
        {/* <ConnectedSelectionsLayout/> */}


        <ConnectedModuleComponent
          rootPath={match.path}
          noMatch={null}
          moduleName={'LoomModule'}
          routes={loomRoutes}
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
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}
