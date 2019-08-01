import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const RootRouterWrapper = (props) => {
  if (props.routes && props.routes.lenght > 0) {
    return (
      <Router>
        { props.children }
        { props.routes.map(routeDef => {
          return (
            <Route
              key={routeDef.key}
              path={routeDef.path}
              component={routeDef.component}
              exact={routeDef.exact} />
          );
        })}
      </Router>
    )
  }
  return null;
}
