import React from 'react';
import {StatusBar} from 'react-native';

import {MainContainer} from './src/styles/AppStyles';
import MusicPlayer from './src/component/MusicPlayer';

const App = () => {
  return (
    <MainContainer>
      <StatusBar barStyle="ligth-content" />
      <MusicPlayer />
    </MainContainer>
  );
};

export default App;
