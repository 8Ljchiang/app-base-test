import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { NotFound } from '../units/NotFound';
import Log from '../../core/services/log.service';

interface IModuleRoutesWrapperProps {
  rootPath: string;
  routes: any[];
  noMatch: any;
}
export class ModuleRoutesWrapper extends Component<IModuleRoutesWrapperProps, any> {
  renderRoutes(routeDefs: any, rootPath: string) {
    if (rootPath) {
      return routeDefs.map((routeDef, index) => {
        return this.renderRoute(routeDef, rootPath, index);
      });
    }
  }

  renderRoute(routeDef: any, rootPath: string, index: any) {
    const root = rootPath ? rootPath : '';
    const builtPath = root + routeDef.path;
    const routeKey = builtPath;
    Log.info('Creating route:' + builtPath);
    const exactMatch = routeDef.childRoutes && routeDef.exact !== null || routeDef.exact !== undefined ? false : routeDef.exact;
    if (routeDef.childRoutes && routeDef.childRoutes.length > 0) {
      const contextKey = index + routeKey;
      return (
        <React.Fragment key={contextKey}>
          <Route
            key={routeKey}
            path={builtPath}
            component={routeDef.component}
            exact={exactMatch} />
          <ModuleRoutesWrapper
            rootPath={builtPath}
            routes={routeDef.childRoutes}
            noMatch={routeDef.component} />
          {/* { this.renderNoMatch(null, '') } */}
        </React.Fragment>
      );
    } else {
      return (
        <Route
          key={routeKey}
          path={builtPath}
          component={routeDef.component}
          exact={exactMatch} />
      );
    }
  }

  renderNoMatch(noMatch: any, rootPath: string) {
    if(noMatch) {
      // return <Redirect from={rootPath+'/:any'} to={rootPath} component={noMatch} />
      Log.info('Creating no match component');
      const NoMatch = noMatch;
      return <Route component={NoMatch} />;
    }
  }

  render() {
    const { routes, rootPath, noMatch } = this.props;
    if (routes && routes.length > 0) {
      // console.log('module routes wrapper:', rootPath);
      // console.log(routes);
      return (
        <Switch>
          { this.renderRoutes(routes, rootPath) }
          { this.renderNoMatch(noMatch, rootPath) }
          <Redirect from={rootPath} to={rootPath + routes[0].path} />
        </Switch>
      );
    }
    return null;
      // if (rootPath) {
      //   console.log('ModuleRoutesWrapper has routes');
      //   return (
      //     <React.Fragment>
      //       { children }
      //       {/* <Switch> */}
      //         { routes.map(routeDef => {
      //           const root = rootPath ? rootPath : '';
      //           const builtPath = root + routeDef.path;
      //           const routeKey = builtPath;
      //           console.log('routeKey:', routeKey);
      //           console.log('creating route:', builtPath);
      //           return (
      //             <React.Fragment>
      //               <Route
      //                 key={routeKey}
      //                 path={builtPath}
      //                 component={routeDef.component}
      //                 exact={routeDef.exact} />
      //               { (routeDef.childRoutes && routeDef.childRoutes.length > 0) ? (
      //                   <ModuleRoutesWrapper
      //                     rootPath={builtPath}
      //                     routes={routeDef.childRoutes}
      //                     noMatch={routeDef.component} />
      //               ) : null }
      //             </React.Fragment>
      //           );
      //         })}
      //     </React.Fragment>
      //   );
      // }
  }
}
