import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ModuleRoutesWrapper } from './module-routes-wrapper';
import { TestA } from '../modules/test-root/test2.component';
import { TestB } from '../modules/test-root/test1.component';
import { NotFound } from '../units/NotFound';

interface IRootRouterWrapperProps {
  rootPath: string;
  routes: any[];
  noMatch: any;
}
export class RootRouterWrapper extends Component<IRootRouterWrapperProps, any> {
  renderRoutes(routeDefs, rootPath) {
    return routeDefs.map((routeDef, index) => {
      // console.log(routeDef);
      // const root = rootPath ? rootPath : '';
      // const builtPath = root + routeDef.path;
      // const routeKey = builtPath;
      // console.log('routeKey:', routeKey);
      // console.log('creating route:', builtPath);
      return this.renderRoute(routeDef, rootPath, index);
    });
  }

  renderRoute(routeDef: any, rootPath: string, index: any) {
    const root = rootPath ? rootPath : '';
    const builtPath = root + routeDef.path;
    const routeKey = builtPath;
    // console.log('routeKey:', routeKey);
    console.log('creating route:', builtPath);
    if (routeDef.childRoutes && routeDef.childRoutes.length > 0) {
      const contextKey = index + routeKey;
      return (
        <React.Fragment key={contextKey}>
          <Route
            key={routeKey}
            path={builtPath}
            component={routeDef.component}
            exact={routeDef.exact} />
          <ModuleRoutesWrapper
            rootPath={builtPath}
            routes={routeDef.childRoutes}
            noMatch={routeDef.component} />
          {/* { this.renderNoMatch(null) } */}
        </React.Fragment>
      );
    } else {
      return (
        <Route
          key={routeKey}
          path={builtPath}
          component={routeDef.component}
          exact={routeDef.exact} />
      );
    }
  }

  renderNoMatch(noMatch: any) {
    if (noMatch) {
      console.log('creating not found');
      return <Route component={NotFound} />
    }
  }

  render() {
    const { routes, noMatch, children, rootPath } = this.props;
    if (routes && routes.length > 0) {
      console.log('RootRouterWrapper has routes', routes);
      return (
        <Router>
          { children }
          <Switch>
            {/* <Route exact path={'/'} component={TestA}/>
            <Route exact path={'/root-b'} component={TestB}/>
            <Route component={NotFound}/> */}
            { this.renderRoutes(routes, rootPath) }
            { this.renderNoMatch(noMatch) }
          </Switch>
        </Router>
      )
    }
    return children;
  }
}
