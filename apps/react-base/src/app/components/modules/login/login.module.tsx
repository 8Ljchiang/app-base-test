import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { ViewPortLayout } from '../../layouts/ViewPortLayout';
import { LeftRightLayout } from '../../layouts/LeftRightLayout';
import { ConnectedLoginForm } from './login-form.component';

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
            left={ConnectedLoginForm}
            right={() => <h1 style={styles.displayTitle}>{"{ interchange }"}</h1>}
          />
      </ModuleComponent>
    </ViewPortLayout>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    background: 'rgb(210, 212, 214)',
  },
  displayTitle: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(52, 165, 235)',
  }
}
