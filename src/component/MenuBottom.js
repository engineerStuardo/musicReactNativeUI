import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {MenuBottomContainer, InnerContainer} from '../styles/MenuBottomStyles';

const MenuBottom = ({width}) => {
  return (
    <MenuBottomContainer width={width}>
      <InnerContainer>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart-outline" size={30} color="#777777" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="repeat" size={30} color="#777777" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="share-outline" size={30} color="#777777" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
        </TouchableOpacity>
      </InnerContainer>
    </MenuBottomContainer>
  );
};

export default MenuBottom;
