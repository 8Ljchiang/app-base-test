import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { NotFound } from '../units/NotFound';

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
          {/* { this.renderNoMatch(null, '') } */}
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

  renderNoMatch(noMatch: any, rootPath: string) {
    if(noMatch) {
      // return <Redirect from={rootPath+'/:any'} to={rootPath} component={noMatch} />
      console.log('creating not found');
      return <Route component={NotFound} />;
    }
  }

  render() {
    const { routes, rootPath, children, noMatch } = this.props;
    if (routes && routes.length > 0) {
      // console.log('module routes wrapper:', rootPath);
      return (
        <Switch>
          { children }
          { this.renderRoutes(routes, rootPath) }
          { this.renderNoMatch(noMatch, rootPath) }
        </Switch>
      );
    } else {
      return children;
    }
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
