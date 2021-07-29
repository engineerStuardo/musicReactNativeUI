import React, {useState, useRef, useEffect} from 'react';
import {View, SafeAreaView, Dimensions, Animated} from 'react-native';

import {
  MenuBottom,
  MenuOptions,
  Time,
  Slider,
  InfoSongs,
  ListSongs,
} from '../component/index';

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
    <SafeAreaView style={{flex: 1, backgroundColor: '#222831'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
      </View>
      <MenuBottom width={width} />
    </SafeAreaView>
  );
};

export default MusicPlayer;
