import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ConnectedSelectionsLayout } from '../../layouts/SelectionsLayout';
import { Gateway } from '../../pages/Gateway';

export const LoomModule = (props) => {
  const { match } = props;
  console.log(match);
  return (
    <div style={styles.container}>
      <ModuleComponent
        match={match}
        noMatch={NotFound}
        moduleName={'GatewayModule'}
        routes={[]}
        fallback={DefaultErrorFallback}>
        <h1>Gateway Module Component</h1>
        <Gateway/>
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
