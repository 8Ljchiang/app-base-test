import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * This component renders the routes that modules have
 * and is able to reference the stored routes from the
 * redux store.
 */

export class ReduxNavigator extends Component<any, any> {
  renderLink(routeRef: any, rootPath: string, index: any) {
    if (routeRef.path && rootPath) {
      const builtPath = rootPath + routeRef.path;
      return (
        <Link key={index + builtPath} to={builtPath}>{builtPath}</Link>
      );
    }
  }

  renderPaths(routeDefs: any[], rootPath: string) {
    return routeDefs.map((rd, index) => {
      return this.renderLink(rd, rootPath, index)
    });
  }

  renderRouteSet(title: string, routeDefs: any[], rootPath: string, index: any) {
    return (
      <>
        <p>{title} - <Link to={rootPath}>{rootPath}</Link></p>
        { this.renderPaths(routeDefs, rootPath) }
      </>
    )
  }

  renderAllRouteSets(routeSets: any) {
    const routeSetsKeys = Object.keys(routeSets);
    return routeSetsKeys.map((rsKey, index) => {
      const routeSet = routeSets[rsKey];
      if (routeSet) {
        const { rootPath, routeDefs } = routeSet;
        if (rootPath && routeDefs && routeDefs.length > 0) {
          return this.renderRouteSet(rsKey, routeDefs, rootPath, index);
        }
      }
    });
  }

  render() {
    const { routeSets } = this.props;
    return this.renderAllRouteSets(routeSets);
  }
}

const styles = {
  linkContainer: {

  }
}

const mapStateToProps = (state) => {
  return {
    routeSets: state.app.routeSets,
    featureKeys: state.account.featureKeys,
  }
}

export const ConnectedReduxNavigator = connect(mapStateToProps, null)(ReduxNavigator);
