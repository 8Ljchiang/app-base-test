import React, { Component } from 'react';
import { RootRouterWrapper } from './root-router-wrapper';
import { ErrorBoundary } from './error-boundary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setRouteSets, addRouteSets } from '../../redux/application.actions';
import { removeSpaces } from '../../core/util/helpers';

interface IModuleRootComponentProps {
  moduleName: string;
  routes: any[];
  fallback: any;
  rootPath: string;
  noMatch: any;
  actions?: any;
}
export class ModuleRootComponent extends Component<IModuleRootComponentProps, any> {
  componentDidMount() {
    const { moduleName, routes, rootPath, actions } = this.props;
    if (actions) {
      const noSpaceModuleName = removeSpaces(moduleName);
      this.props.actions.addRouteSets({ setKey: noSpaceModuleName, routeDefs: routes, rootPath });
    }
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      setRouteSets,
      addRouteSets
    }, dispatch)
  }
}

export const ConnectedModuleRoot = connect(null, mapDispatchToProps)(ModuleRootComponent);
