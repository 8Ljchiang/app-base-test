import React from 'react';

import './app.css';
import { MainLayout } from './components/layouts/MainLayout';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/index.reducer';

const store = createStore(rootReducer);
console.log(store.getState());
export const App = () => {
  return (
    <Provider store={store}>
      <MainLayout></MainLayout>
    </Provider>
  );
};

export default App;
