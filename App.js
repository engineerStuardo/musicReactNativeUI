import React from 'react';
import {StatusBar, View} from 'react-native';

import MusicPlayer from './src/screens/MusicPlayer';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="ligth-content" />
      <MusicPlayer />
    </View>
  );
};

export default App;
