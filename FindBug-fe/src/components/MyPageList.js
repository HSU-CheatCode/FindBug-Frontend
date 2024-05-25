import { Pressable, StyleSheet, Text, View } from 'react-native';
import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { BLACK, GRAY } from '../colors';
import { EvilIcons } from '@expo/vector-icons';

const MyPageList = memo(({ item }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={item.onPress}
        style={({ pressed }) => [
          styles.textcontainer,
          { opacity: pressed ? 0.5 : 1 },
        ]} // pressed 상태에 따라 투명도 조절
      >
        <View style={styles.textcontainer}>
          <View style={styles.textleftfield}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
          <EvilIcons name="chevron-right" size={40} color="black" />
        </View>
      </Pressable>
      {/* <View style={{ height: 1, backgroundColor: GRAY.LIGHT, marginTop: 20 }} /> */}
    </View>
  );
});

MyPageList.displayName = 'MyPageList';

MyPageList.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textleftfield: {
    flex: 1,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default MyPageList;
