import React from 'react';
import {Animated} from 'react-native';

import {ListSongsContainer} from '../styles/ListSongsStyles';
import RenderSongs from './RenderSongs';

const ListSongs = ({width, songs, songSlider, scrollX}) => {
  return (
    <ListSongsContainer width={width}>
      <Animated.FlatList
        ref={songSlider}
        data={songs}
        renderItem={({index, item}) => (
          <RenderSongs width={width} image={item.image} />
        )}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
      />
    </ListSongsContainer>
  );
};

export default ListSongs;
