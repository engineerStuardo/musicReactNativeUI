import React from 'react';
import {View, Text} from 'react-native';

const Time = () => {
  return (
    <View
      style={{
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{color: '#FFF'}}>0:00</Text>
      <Text style={{color: '#FFF'}}>0:00</Text>
    </View>
  );
};

export default Time;
