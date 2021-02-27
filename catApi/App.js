import React from 'react';
import MainNavigator from './src/router/MainNavigator';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
