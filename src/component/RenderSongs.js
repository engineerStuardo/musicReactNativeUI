import React from 'react';

import {
  MainContainer,
  InnerContainer,
  ImageStyle,
} from '../styles/RenderSongsStyles';

const RenderSongs = ({width, image}) => {
  return (
    <MainContainer width={width}>
      <InnerContainer>
        <ImageStyle source={image} />
      </InnerContainer>
    </MainContainer>
  );
};

export default RenderSongs;
