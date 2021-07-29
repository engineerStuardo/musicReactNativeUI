import React from 'react';
import {View, Text} from 'react-native';

const InfoSongs = ({title, artist}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '700',
          textAlign: 'center',
          color: '#EEEEEE',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '200',
          textAlign: 'center',
          color: '#EEEEEE',
        }}>
        {artist}
      </Text>
    </View>
  );
};

export default InfoSongs;
