import React, { Component } from 'react';
import { RootRouterWrapper } from './root-router-wrapper';
import { ErrorBoundary } from './error-boundary';

interface IModuleRootComponentProps {
  moduleName: string;
  routes: any[];
  fallback: any;
  rootPath: string;
  noMatch: any;
}
export class ModuleRootComponent extends Component<IModuleRootComponentProps, any> {
  render() {
    const { moduleName, routes, fallback, children, rootPath, noMatch } = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary fallback={fallback} bondaryContext={moduleName}>
          <RootRouterWrapper routes={routes} rootPath={rootPath} noMatch={noMatch}>
            { children }
          </RootRouterWrapper>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
