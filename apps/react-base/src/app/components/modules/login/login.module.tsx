import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ViewPortLayout } from '../../layouts/ViewPortLayout';
import { LeftRightLayout } from '../../layouts/LeftRightLayout';
import { ConnectedLoginForm } from '../../forms/login-form.component';
import { LoginBanner } from './login-banner.component';
import { AccessPort } from './access-port.component';

export const LoginModule = (props) => {
  const { match } = props;
  const root = match.path;
  return (
    <ViewPortLayout>
      <ModuleComponent
        rootPath={root}
        noMatch={NotFound}
        moduleName={'AccountModule'}
        routes={[]}
        fallback={DefaultErrorFallback}>
          <LeftRightLayout
            left={AccessPort}
            right={LoginBanner}
          />
      </ModuleComponent>
    </ViewPortLayout>
  );
}

const LoginFormOverlay = (props) => {
  return (
    <div style={styles.overlayContainer}>
      <ConnectedLoginForm/>
    </div>
  )
}

const styles = {
  overlayContainer: {
    padding: '20px',
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    width: '100%',
    boxShadow: '0 0 4px 4px rgb(50, 50, 50)'
  }
}
