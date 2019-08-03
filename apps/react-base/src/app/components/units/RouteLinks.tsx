import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const RouteLinks = (props) => {
  const { routes, rootPath, featureKeys } = props;
  if (routes) {
    const root = rootPath ? rootPath : '';
    const updatedFeatureKeys = featureKeys && Array.isArray(featureKeys) ? featureKeys : [];
    if (updatedFeatureKeys) {
      const filteredRoutes = routes.filter((r) => r.featureLink ? updatedFeatureKeys.includes(r.featureLink) : true);
      return filteredRoutes.map((r, index) => {
        const builtRoute = root + r.path;
        console.log('built link: ', builtRoute);
        return (
          <Link key={index} to={builtRoute} style={styles.conatiner}>{builtRoute}</Link>
        );
      });
    }
    return null;
  }
}

const styles = {
  conatiner: {
    margin: '0 8px'
  }
}

const mapStateToProps = (state) => {
  return {
    featureKeys: state.account.featureKeys
  }
}

export const ConnectedRouteLinks = connect(mapStateToProps, null)(RouteLinks);
