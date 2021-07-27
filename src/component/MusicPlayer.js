import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const MusicPlayer = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Ionicons name="heart-outline" size={30} />
      <Text>hello from music player component</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

export default MusicPlayer;
