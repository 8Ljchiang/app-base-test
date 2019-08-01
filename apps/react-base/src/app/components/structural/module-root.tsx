import React, { Component } from 'react';
import { RootRouterWrapper } from './root-router-wrapper';
import { ErrorBoundary } from './error-boundary';

export class ModuleRootComponent extends Component<any, any> {
  render() {
    const { moduleName } = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary fallback={this.props.fallback} bondaryContext={moduleName}>
          { this.props.children }
          <RootRouterWrapper routes={this.props.routes} />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
