import React, { Component } from 'react';
import { ModuleRoutesWrapper } from './module-routes-wrapper';
import { ErrorBoundary } from './error-boundary';
import { NotFound } from '../units/NotFound';

interface IModuleComponentProps {
  moduleName: string;
  routes: any[];
  fallback: any;
  rootPath: string;
  noMatch: any;
}
export class ModuleComponent extends Component<IModuleComponentProps, any> {
  render() {
    const { rootPath, moduleName, routes, fallback, children, noMatch } = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary fallback={fallback} bondaryContext={moduleName}>
          <ModuleRoutesWrapper routes={routes} rootPath={rootPath} noMatch={noMatch} />
          { children }
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
