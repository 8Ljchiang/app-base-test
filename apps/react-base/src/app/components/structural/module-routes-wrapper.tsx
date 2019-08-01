import React from 'react';
import { Route } from 'react-router-dom';

export const ModuleRoutesWrapper = (props) => {
  if (props.routes && props.routes.lenght > 0) {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
  return null;
}
