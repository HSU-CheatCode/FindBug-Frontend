import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
const image1 = require('@assets/images/image_300.png');
const image2 = require('@assets/images/image_301.png');
const image3 = require('@assets/images/image_302.png');
import { TypoStyle } from 'styles/font';
import HorizontalBlank from 'components/atoms/HorizontalBlank';

const W_WIDTH = Dimensions.get('window').width;

const DATA = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
];

const BugsKillSection = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        autoplay={false}
      >
        {DATA.map((item, index) => (
          <View style={styles.slide} key={index}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textWrapper}>
{/* 이동할 곳 넣기 */}
            </View>
          </View>
        ))}
      </Swiper>
      <HorizontalBlank height={60} />
    </View>
  );
};

export default BugsKillSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  image: {
    width: W_WIDTH,
    height: 315,
    backgroundColor: '#D9D9D9',
  },
  textWrapper: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 25.2,
    letterSpacing: -0.32,
    fontFamily: TypoStyle.SemiBold,
    color: '#191919',
  },
  normalText: {
    fontSize: 16,
    lineHeight: 19.09,
    letterSpacing: -0.32,
    fontFamily: TypoStyle.SemiBold,
    color: '#191919',
  },
  subText: {
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: -0.32,
    fontFamily: TypoStyle.Regular,
    color: '#191919',
  },
});
