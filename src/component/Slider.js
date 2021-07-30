import React from 'react';
import Slider from '@react-native-community/slider';

import {SliderStyled} from '../styles/SliderStyles';

const SliderOption = () => {
  return (
    <SliderStyled
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
