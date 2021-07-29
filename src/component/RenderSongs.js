import React from 'react';
import {View, Image} from 'react-native';

const RenderSongs = ({width, image}) => {
  return (
    <View
      style={{
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 300,
          height: 340,
          alignItems: 'center',
          marginBottom: 25,
          shadowColor: '#ccc',
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
          shadowOffset: {
            width: 5,
            height: 5,
          },
          elevation: 5,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
            marginBottom: 15,
          }}
          source={image}
        />
      </View>
    </View>
  );
};

export default RenderSongs;
