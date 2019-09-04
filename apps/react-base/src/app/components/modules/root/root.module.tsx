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
    top: '30px',
    right: '30px',
    display: 'flex',
    flexFlow: 'column',
    background: 'rgba(255,255,255,0.6)',
    // border: '3px dotted gray',
    boxShadow: '0 0 8px 4px rgba(30, 30, 30, 0.5)',
    border: '4px solid skyblue',
    zIndex: 100,
  },
  linkContainer: {
    display: 'flex'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}
