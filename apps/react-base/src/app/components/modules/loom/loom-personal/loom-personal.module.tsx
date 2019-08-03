import React from 'react';
import { ModuleComponent } from '../../../structural/module';
import { DefaultErrorFallback } from '../../../units/DefaultErrorFallback';
import { ConnectedSelectionsLayout } from '../../../layouts/SelectionsLayout';
import { RouteLinks } from '../../../units/RouteLinks';
import { BannerLayout } from '../../../layouts/BannerLayout';

export const LoomPersonalModule = (props) => {
  const { match } = props;
  return (
    <div style={styles.container}>
        <div style={styles.linksContainer}>
          <p>Loom Personal Module:</p>
          <RouteLinks routes={[]} rootPath={match.path} />
        </div>
        <ConnectedSelectionsLayout/>
        <ModuleComponent
          rootPath={match.path}
          noMatch={null}
          moduleName={'LoomPersonalModule'}
          routes={[]}
          fallback={DefaultErrorFallback}>
          <BannerLayout title={'Loom Personal Module'}>
          </BannerLayout>
        </ModuleComponent>
    </div>
  );
}

const styles = {
  linksContainer: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    // alignItems: 'center',
    height: '100vh',
    width: '100%'
  }
}
