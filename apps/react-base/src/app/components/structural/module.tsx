import React, { Component } from 'react';
import { ModuleRoutesWrapper } from './module-routes-wrapper';
import { ErrorBoundary } from './error-boundary';

export class ModuleComponent extends Component<any, any> {
  render() {
    const { moduleName } = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary fallback={this.props.fallback} bondaryContext={moduleName}>
          { this.props.children }
          <ModuleRoutesWrapper routes={this.props.routes} />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
