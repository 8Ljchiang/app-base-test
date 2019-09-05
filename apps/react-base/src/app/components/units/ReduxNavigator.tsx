import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isNoneOrNull, isArrayEmpty, isArray } from '../../core/util/helpers';

/**
 * This component renders the routes that modules have
 * and is able to reference the stored routes from the
 * redux store.
 */

export class ReduxNavigator extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      showNav: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      showNav: !this.state.showNav
    });
  }

  renderLink(routeRef: any, rootPath: string, index: any) {
    if (!isNoneOrNull(routeRef.path) && !isNoneOrNull(rootPath)) {
      const builtPath = rootPath + routeRef.path;
      return (
        <Link key={index + builtPath} to={builtPath}>{builtPath}</Link>
      );
    }
  }

  renderPaths(routeDefs: any[], rootPath: string) {
    const { featureKeys } = this.props;
    const updatedFeatureKeys = isArray(featureKeys) ? featureKeys : [];
    if (updatedFeatureKeys) {
      const filteredDefs = routeDefs.filter((rd) => !isNoneOrNull(rd.featureLink) ? updatedFeatureKeys.includes(rd.featureLink) : true);
      return filteredDefs.map((rd, index) => {
        return this.renderLink(rd, rootPath, index)
      });
    }
  }

  renderRouteSet(title: string, routeDefs: any[], rootPath: string, index: any) {
    return (
      <React.Fragment key={index + title}>
        <p>{title} - <Link to={rootPath}>{rootPath}</Link></p>
        { this.renderPaths(routeDefs, rootPath) }
      </React.Fragment>
    )
  }

  renderAllRouteSets(routeSets: any) {
    const routeSetsKeys = Object.keys(routeSets);
    return routeSetsKeys.map((rsKey, index) => {
      const routeSet = routeSets[rsKey];
      if (routeSet) {
        const { rootPath, routeDefs } = routeSet;
        if (!isNoneOrNull(rootPath) && !isArrayEmpty(routeDefs)) {
          return this.renderRouteSet(rsKey, routeDefs, rootPath, index);
        }
      }
    });
  }

  render() {
    const { routeSets } = this.props;
    const { showNav } = this.state;
    const buttonTitle = showNav ? 'hide' : 'show';
    return (
      <div style={styles.reduxNavContainer}>
        <div onClick={this.toggle} style={styles.navButton}>{'nav: ' + buttonTitle}</div>
        { showNav &&
         (
          <div style={styles.routesContainer}>
            { showNav && this.renderAllRouteSets(routeSets) }
          </div>
         )
        }
      </div>
    )
  }
}

const styles = {
  linkContainer: {

  },
  reduxNavContainer: {
    display: 'flex',
    flexFlow: 'column',
    background: 'rgba(255,255,255,0.6)',
    // border: '3px dotted gray',
    maxHeight: '400px',
    boxShadow: '0 0 8px 4px rgba(30, 30, 30, 0.5)',
    border: '4px solid pink',
    zIndex: 100,
  },
  navButton: {
    // background: 'skyblue',
    background: 'pink',
    outline: 'none',
    padding: '3px 6px'
  },
  routesContainer: {
    display: 'flex',
    flexFlow: 'column',
    padding: '4px',
    overflow: 'auto',
  }
}

const mapStateToProps = (state) => {
  return {
    routeSets: state.app.routeSets,
    featureKeys: state.account.featureKeys,
  }
}

export const ConnectedReduxNavigator = connect(mapStateToProps, null)(ReduxNavigator);
