
// import { StyleSheet, View } from 'react-native';

// const DetectedVideoScreen = () => {
//   return <View style={styles.container}></View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// export default DetectedVideoScreen;

import React from 'react';
import { StyleSheet, View, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
<<<<<<< Updated upstream
=======
import { ColorStyle } from 'styles/color';
import { TypoStyle } from 'styles/font';
>>>>>>> Stashed changes

const DetectedVideoScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('MyPage');
                return true;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [navigation])
    );

    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< Updated upstream
=======
    fontFamily: TypoStyle.SemiBold,
    color: ColorStyle.White,
>>>>>>> Stashed changes
  },
});

export default DetectedVideoScreen;

