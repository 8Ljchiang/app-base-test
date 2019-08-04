import React, { Component } from 'react';
import { ModuleRootComponent, ConnectedModuleRoot } from '../../structural/module-root';
import { mainRoutes } from './root.routes';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { RouteLinks, ConnectedRouteLinks } from '../../units/RouteLinks';
import { ViewPortLayout } from '../../layouts/ViewPortLayout';
import { ConnectedReduxNavigator } from '../../units/ReduxNavigator';

interface IModuleComponentProps {
  moduleName: string;
  routes: any[];
  fallback: any;
}

export class RootModule extends Component<any, any> {
  render() {
    return (
      <ViewPortLayout>
        <ConnectedModuleRoot
          moduleName={'RootModule'}
          rootPath={''}
          noMatch={NotFound}
          routes={mainRoutes}
          fallback={DefaultErrorFallback}>
          {/* <h1>Root Module Component</h1> */}
          {/* <div style={styles.linkContainer}>
            <p>Root Module:</p>
            <ConnectedRouteLinks routes={mainRoutes}/>
          </div> */}
          <div style={styles.reduxNavContainer}>
            <ConnectedReduxNavigator/>
          </div>
        </ConnectedModuleRoot>
      </ViewPortLayout>
    );
  }
}

const styles = {
  reduxNavContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexFlow: 'column',
    background: 'gray',
    zIndex: 100,
  },
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
