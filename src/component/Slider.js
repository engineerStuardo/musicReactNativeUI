import React from 'react';
import Slider from '@react-native-community/slider';

const SliderOption = () => {
  return (
    <Slider
      style={{
        width: 350,
        height: 40,
        flexDirection: 'row',
      }}
      value={10}
      minimumValue={0}
      maximumValue={100}
      thumbTintColor="#FFD369"
      minimumTrackTintColor="#FFD369"
      maximumTrackTintColor="#FFF"
      onSliderChange={() => {}}
    />
  );
};

export default SliderOption;
