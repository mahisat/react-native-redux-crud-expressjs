import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './src/reducers';
import MainNavigation from './src/navigations/MainNavigation';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <MainNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
