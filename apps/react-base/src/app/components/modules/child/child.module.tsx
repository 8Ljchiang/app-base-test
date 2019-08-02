import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { childRoutes } from './child.routes';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ConnectedRouteLinks } from '../../units/RouteLinks';

export const ChildModule = (props) => {
  const { match } = props;
  const root = match.path;
  return (
    <div style={styles.container}>
      <h1>Child Module Component</h1>
      <div style={styles.linksContainer}>
        <ConnectedRouteLinks routes={childRoutes} rootPath={root} />
      </div>
      <ModuleComponent
        rootPath={root}
        noMatch={null}
        moduleName={'ChildModule'}
        routes={childRoutes}
        fallback={DefaultErrorFallback}>
      </ModuleComponent>
    </div>
  );
}

const styles = {
  linksContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
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
