import React from 'react';
import {SafeAreaView} from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainNavigation />
    </SafeAreaView>
  );
};

export default App;
