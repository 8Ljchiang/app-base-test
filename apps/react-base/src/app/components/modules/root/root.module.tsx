import React from 'react';
import { ModuleRootComponent } from '../../structural/module-root';
import { mainRoutes } from './root.routes';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ConnectedNavigation } from '../../units/Navigation';
import { ConnectedSelectionsLayout } from '../../layouts/SelectionsLayout';
import { RouteLinks } from '../../units/RouteLinks';

interface IModuleComponentProps {
  moduleName: string;
  routes: any[];
  fallback: any;
}

export const RootModule = (props) => {
  console.log(props);
  return (
    <div style={styles.container}>
      <ModuleRootComponent
        moduleName={'RootModule'}
        rootPath={''}
        noMatch={NotFound}
        routes={mainRoutes}
        fallback={DefaultErrorFallback}>
        <h1>Root Module Component</h1>
        <RouteLinks routes={mainRoutes}/>
      </ModuleRootComponent>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  }
}
