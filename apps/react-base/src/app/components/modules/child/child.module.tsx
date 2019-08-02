import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { childRoutes } from './child.routes';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';

export const ChildModule = (props) => {
  const { match } = props;
  console.log(match);
  return (
    <div style={styles.container}>
      <ModuleComponent
        match={match}
        noMatch={NotFound}
        moduleName={'ChildModule'}
        routes={childRoutes}
        fallback={DefaultErrorFallback}>
        <h1>Child Module Component</h1>
      </ModuleComponent>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  }
}
