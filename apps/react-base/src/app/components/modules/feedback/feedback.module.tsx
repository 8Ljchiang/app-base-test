import React from 'react';
import { ModuleComponent } from '../../structural/module';
import { NotFound } from '../../units/NotFound';
import { DefaultErrorFallback } from '../../units/DefaultErrorFallback';
import { FeedbackForm } from './feedback-form.component';

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
          <div style={styles.header}>
            <h1 style={styles.headerTitle}>Feedback</h1>
          </div>
          <div style={styles.body}>
            <FeedbackForm/>
          </div>
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
  },
  header: {
    height: '160px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgb(34, 44, 56)',
  },
  headerTitle: {
    color: 'rgb(52, 165, 235)'
    // color: 'gray'
  },
  body: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  }
}
