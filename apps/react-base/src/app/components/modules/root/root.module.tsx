import React from 'react';
import { ModuleRootComponent } from '../../structural/module-root';
import { mainRoutes } from './root.routes';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { RouteLinks, ConnectedRouteLinks } from '../../units/RouteLinks';
import { ViewPortLayout } from '../../layouts/ViewPortLayout';

interface IModuleComponentProps {
  moduleName: string;
  routes: any[];
  fallback: any;
}

export const RootModule = (props) => {
  return (
    <ViewPortLayout>
      <ModuleRootComponent
        moduleName={'RootModule'}
        rootPath={''}
        noMatch={NotFound}
        routes={mainRoutes}
        fallback={DefaultErrorFallback}>
        {/* <h1>Root Module Component</h1> */}
        <div style={styles.linkContainer}>
          <p>Root Module:</p>
          <ConnectedRouteLinks routes={mainRoutes}/>
        </div>
      </ModuleRootComponent>
    </ViewPortLayout>
  );
}

const styles = {
  linkContainer: {
    display: 'flex'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  }
}
