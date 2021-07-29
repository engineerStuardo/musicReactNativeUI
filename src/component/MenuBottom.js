import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MenuBottom = ({width}) => {
  return (
    <View
      style={{
        borderTopColor: '#393E46',
        borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
        }}>
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
      </View>
    </View>
  );
};

export default MenuBottom;
