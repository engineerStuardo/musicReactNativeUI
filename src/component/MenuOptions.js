import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MenuOptions = ({skipNext, skipPrevious}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={skipPrevious}>
        <Ionicons name="play-skip-back-outline" size={35} color="#FFD369" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="ios-pause-circle" size={75} color="#FFD369" />
      </TouchableOpacity>
      <TouchableOpacity onPress={skipNext}>
        <Ionicons name="play-skip-forward-outline" size={35} color="#FFD369" />
      </TouchableOpacity>
    </View>
  );
};

export default MenuOptions;
