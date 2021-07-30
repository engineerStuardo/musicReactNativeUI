import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {MenuOptionsContainer} from '../styles/MenuOptionsStyles';

const MenuOptions = ({skipNext, skipPrevious}) => {
  return (
    <MenuOptionsContainer>
      <TouchableOpacity onPress={skipPrevious}>
        <Ionicons name="play-skip-back-outline" size={35} color="#FFD369" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="ios-pause-circle" size={75} color="#FFD369" />
      </TouchableOpacity>
      <TouchableOpacity onPress={skipNext}>
        <Ionicons name="play-skip-forward-outline" size={35} color="#FFD369" />
      </TouchableOpacity>
    </MenuOptionsContainer>
  );
};

export default MenuOptions;
