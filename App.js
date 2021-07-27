import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MusicPlayer from './src/component/MusicPlayer';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MusicPlayer />
    </View>
  );
};

export default App;
