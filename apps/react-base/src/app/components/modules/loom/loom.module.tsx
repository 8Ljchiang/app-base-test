import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ConnectedSelectionsLayout } from '../../layouts/SelectionsLayout';
import { RouteLinks } from '../../units/RouteLinks';

export const LoomModule = (props) => {
  const { match } = props;
  return (
    <div style={styles.container}>
      <ModuleComponent
        match={match}
        noMatch={NotFound}
        moduleName={'LoomModule'}
        routes={[]}
        fallback={DefaultErrorFallback}>
        {/* <h1>Loom Module Component</h1> */}
        <div style={styles.linkContainer}>
          <RouteLinks routes={[]}/>
        </div>
        <ConnectedSelectionsLayout/>
      </ModuleComponent>
    </div>
  );
}

const styles = {
  linksContainer: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  }
}
