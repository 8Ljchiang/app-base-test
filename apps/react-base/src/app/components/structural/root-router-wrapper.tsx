import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ModuleRoutesWrapper } from './module-routes-wrapper';
import { NotFound } from '../units/NotFound';
import { connect } from 'react-redux';
import Log from '../../core/services/log.service';
import { AppFeature } from '../../core/configs/feature.config';
import { ExpFeedbackFrameScene } from '../scenes/exp-feedback-frame.scene';

interface IRootRouterWrapperProps {
  rootPath: string;
  routes: any[];
  noMatch: any;
}
export class RootRouterWrapper extends Component<IRootRouterWrapperProps, any> {
  renderRoutes(routeDefs, rootPath, featureKeys: AppFeature[]) {
    return routeDefs.map((routeDef, index) => {
      // console.log(routeDef);
      // const root = rootPath ? rootPath : '';
      // const builtPath = root + routeDef.path;
      // const routeKey = builtPath;
      // console.log('routeKey:', routeKey);
      // console.log('creating route:', builtPath);
      // if (routeDef.featureLink) {
      //   return featureKeys.includes(routeDef.featureLink) ? this.renderRoute(routeDef, rootPath, index) : null;
      // }
      return this.renderRoute(routeDef, rootPath, index);
    });
  }

  renderRoute(routeDef: any, rootPath: string, index: any) {
    const root = rootPath ? rootPath : '';
    const builtPath = root + routeDef.path;
    const routeKey = builtPath;
    Log.info('Creating route:' + builtPath);
    if (routeDef.childRoutes && routeDef.childRoutes.length > 0) {
      const contextKey = index + routeKey;
      const exactMatch = routeDef.childRefs ? false : routeDef.exact;
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
      Log.info('Creating no match component');
      const NoMatch = noMatch;
      return <Route component={NoMatch} />
    }
  }

  render() {
    const { routes, noMatch, children, rootPath } = this.props;
    // const updatedFeatureKeys = featureKeys && Array.isArray(featureKeys) ? featureKeys : [];
    if (routes && routes.length > 0) {
      return (
        <Router>
          { children }
          <ExpFeedbackFrameScene>
            <Switch>
              {/* <Route exact path={'/'} component={TestA}/>
              <Route exact path={'/root-b'} component={TestB}/>
              <Route component={NotFound}/> */}
              { this.renderRoutes(routes, rootPath, []) }
              { this.renderNoMatch(noMatch) }
            </Switch>
            <div className="frame__action-container">
            <div className="action-container">
              Profile
            </div>
            <div className="action-container">
              Modules
            </div>
            <div className="action-container">
              Announcements
            </div>
            <div className="action-container">
              Roadmap
            </div>
            <div className="action-container">
              App Feedback
            </div>
          </div>
          </ExpFeedbackFrameScene>
        </Router>
      )
    }
    return children;
  }
}

// const mapStateToProps = (state) => {
//   return {
//     featureKeys: state.account.featureKeys
//   }
// }

// export const ConnectedRootRouterWrapper = connect(mapStateToProps, null)(RootRouterWrapper);
