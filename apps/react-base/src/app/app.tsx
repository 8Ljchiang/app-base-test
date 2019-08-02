import React from 'react';

import './app.css';
import { MainLayout } from './components/layouts/MainLayout';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/index.reducer';
import { RootModule } from './components/modules/root/root.module';

const store = createStore(rootReducer);

export const App = () => {
  return (
    <Provider store={store}>
      {/* <MainLayout></MainLayout> */}
      <RootModule/>
    </Provider>
  );
};

export default App;
