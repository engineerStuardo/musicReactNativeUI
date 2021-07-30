import React from 'react';
import {View} from 'react-native';

import {TextStyled} from '../styles/InfoSongsStyles';

const InfoSongs = ({title, artist}) => {
  return (
    <View>
      <TextStyled size={18} weight={700}>
        {title}
      </TextStyled>
      <TextStyled size={16} weight={200}>
        {artist}
      </TextStyled>
    </View>
  );
};

export default InfoSongs;
