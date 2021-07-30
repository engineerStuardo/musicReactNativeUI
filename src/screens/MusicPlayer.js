import React, {useState, useRef, useEffect} from 'react';
import {Dimensions, Animated} from 'react-native';

import {
  MenuBottom,
  MenuOptions,
  Time,
  Slider,
  InfoSongs,
  ListSongs,
} from '../component/index';
import {SafeArea, MusicPlayerContainer} from '../styles/MusicPlayerStyles';

import songs from '../model/data';

const {width, height} = Dimensions.get('window');

const MusicPlayer = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      setSongIndex(Math.round(value / width));
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const skipNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const skipPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  return (
    <SafeArea>
      <MusicPlayerContainer>
        <ListSongs
          width={width}
          songSlider={songSlider}
          songs={songs}
          scrollX={scrollX}
        />
        <InfoSongs
          title={songs[songIndex].title}
          artist={songs[songIndex].artist}
        />
        <Slider />
        <Time />
        <MenuOptions skipNext={skipNext} skipPrevious={skipPrevious} />
      </MusicPlayerContainer>
      <MenuBottom width={width} />
    </SafeArea>
  );
};

export default MusicPlayer;
