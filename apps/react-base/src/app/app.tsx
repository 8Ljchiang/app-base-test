import React from 'react';

import './app.css';
import './styles/forms.css';
import './styles/lists.css';
import { MainLayout } from './components/layouts/MainLayout';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/index.reducer';
import { RootModule } from './components/modules/root/root.module';
import { ErrorBoundary } from './components/structural/error-boundary';
import { DefaultErrorFallback } from './components/units/DefaultErrorFallback';

const store = createStore(rootReducer);

export const App = () => {
  return (
    <Provider store={store}>
      {/* <MainLayout></MainLayout> */}
      <ErrorBoundary fallback={DefaultErrorFallback}>
        <RootModule/>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
