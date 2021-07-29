import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

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

  const renderSongs = ({index, item}) => {
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
            source={item.image}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#222831'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: width}}>
          <Animated.FlatList
            ref={songSlider}
            data={songs}
            renderItem={renderSongs}
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
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              textAlign: 'center',
              color: '#EEEEEE',
            }}>
            {songs[songIndex].title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '200',
              textAlign: 'center',
              color: '#EEEEEE',
            }}>
            {songs[songIndex].artist}
          </Text>
        </View>
        <View>
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
          <View
            style={{
              width: 340,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#FFF'}}>0:00</Text>
            <Text style={{color: '#FFF'}}>0:00</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '60%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={skipPrevious}>
            <Ionicons name="play-skip-back-outline" size={35} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-pause-circle" size={75} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipNext}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderTopColor: '#393E46',
          borderTopWidth: 1,
          width: width,
          alignItems: 'center',
          paddingVertical: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;
