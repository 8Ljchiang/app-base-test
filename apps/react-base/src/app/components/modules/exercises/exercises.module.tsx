import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { BannerLayout } from '../../layouts/BannerLayout';
import { Link } from 'react-router-dom';
import { ModuleNames } from '../../../core/interfaces/ModuleNames';

export const FeedbackModule = (props) => {
  const { match } = props;
  const root = match.path;
  return (
    <div style={styles.container}>
      <ModuleComponent
        rootPath={root}
        noMatch={NotFound}
        moduleName={ModuleNames.EXERCISES}
        routes={[]}
        fallback={DefaultErrorFallback}>
          <BannerLayout title={'Exercises'}>

          </BannerLayout>
      </ModuleComponent>
    </div>
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
  }
}
