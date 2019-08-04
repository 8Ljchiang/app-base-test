import React, { Component } from 'react';
import { RootRouterWrapper } from './root-router-wrapper';
import { ErrorBoundary } from './error-boundary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setRouteSets, addRouteSets } from '../../redux/application.actions';
import { removeSpaces, isArrayEmpty, isNoneOrNull } from '../../core/util/helpers';
import { ModuleRoutesWrapper } from './module-routes-wrapper';
import { Route } from 'react-router-dom';

interface IModuleBundle {
  routes: any[];
}

interface IRoutesRendererProps {
  moduleName: string;
  routes: any[];
  fallback: any;
  rootPath: string;
  noMatch: any;
  actions?: any;
}

// TODO: Not fully implemented
// Purpose: Trying to implement a way for base routes to have a renderable component
// Currently when modules are attached to a route '/example', nothing
// Can really be rendered at that exact route, and will render for all
// Child routes '/example/child';

// Need to implement a way to handle child routes so that the root route can
// have a standalone component that will render without the child routes always rendering it.

export class RoutesRenderer extends Component<IRoutesRendererProps, any> {
  componentDidMount() {
    // const { moduleName, routes, rootPath, actions } = this.props;
    // if (actions) {
    //   const noSpaceModuleName = removeSpaces(moduleName);
    //   this.props.actions.addRouteSets({ setKey: noSpaceModuleName, routeDefs: routes, rootPath });
    // }
  }

  renderRoute(path: string, exact: boolean, component: any) {
    return <Route key={path} path={path} exact={exact} component={component} />
  }

  renderRouteDefinitions(definitions: any[], rootPath: string) {
    if(!isArrayEmpty(definitions)) {
      return definitions.map((routeDef, index) => {
        const { path, exact, component, subModule } = routeDef;
        const updatedExact = isNoneOrNull(exact) ? true : exact;
        const root = isNoneOrNull(rootPath) ? '' : rootPath;
        const builtPath = root + path;
        return (
          <React.Fragment key={index}>
            { !isNoneOrNull(component) ? this.renderRoute(builtPath, updatedExact, component) : null }
            { !isNoneOrNull(subModule) ? this.renderSubmodule(subModule, root, updatedExact) : null }
          </React.Fragment>
        );
      });
    }
    return null;
  }

  renderSubmodule(subModule: any, rootPath: string, exact: boolean) {
    const { routeDefs, component } = subModule;
    return (
      <>
        { !isNoneOrNull(component) ? this.renderRoute(rootPath, exact, component) : null }
        { this.renderRouteDefinitions(routeDefs, rootPath) }
      </>
    );
  }

  render() {
    const { moduleName, routes, fallback, children, rootPath, noMatch } = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary fallback={fallback} bondaryContext={moduleName}>
          { this.renderRouteDefinitions(routes, rootPath) }
          {/* <ModuleRoutesWrapper routes={routes} rootPath={rootPath} noMatch={noMatch} /> */}
          {/* { children } */}
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
