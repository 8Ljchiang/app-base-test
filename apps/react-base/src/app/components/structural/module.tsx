import React, { Component } from 'react';
import { ModuleRoutesWrapper } from './module-routes-wrapper';
import { ErrorBoundary } from './error-boundary';
import { NotFound } from '../units/NotFound';
import { removeSpaces } from '../../core/util/helpers';
import { bindActionCreators } from 'redux';
import { addRouteSets, setRouteSets } from '../../redux/application.actions';
import { connect } from 'react-redux';

interface IModuleComponentProps {
  moduleName: string;
  routes: any[];
  fallback: any;
  rootPath: string;
  noMatch: any;
  actions?: any;
}
export class ModuleComponent extends Component<IModuleComponentProps, any> {
  componentDidMount() {
    const { moduleName, routes, rootPath, actions } = this.props;
    if (actions) {
      const noSpaceModuleName = removeSpaces(moduleName);
      this.props.actions.addRouteSets({ setKey: noSpaceModuleName, routeDefs: routes, rootPath });
    }
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      addRouteSets,
      setRouteSets
    }, dispatch)
  }
}

export const ConnectedModuleComponent = connect(null, mapDispatchToProps)(ModuleComponent);
