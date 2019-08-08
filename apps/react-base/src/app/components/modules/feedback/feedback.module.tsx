import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { FeedbackForm } from './feedback-form.component';
import { BannerLayout } from '../../layouts/BannerLayout';
import { Link } from 'react-router-dom';

export const FeedbackModule = (props) => {
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
          <BannerLayout title={"Feedback"}>
            <Link to={'/gateway'}>Gateway</Link>
            <FeedbackForm/>
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
