import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ConnectedProfile } from '../../pages/Profile';

export const AccountModule = (props) => {
  const { match } = props;
  const root = match.path;
  return (
    <div style={styles.container}>
      <ModuleComponent
        rootPath={root}
        noMatch={NotFound}
        moduleName={'AccountModule'}
        routes={[]}
        fallback={DefaultErrorFallback}>
        {/* <h1>Account Module Component</h1> */}
        <ConnectedProfile/>
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
