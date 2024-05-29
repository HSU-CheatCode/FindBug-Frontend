import BugDetected from "@components/BugDetected";
import { FlatList, StyleSheet, View } from "react-native";

const DetectedVideoScreen = () => {
  const detected = [
    {
      id: 1,
      cam: "카메라 1",
      bug: "벌레",
      time: "2021-08-26 14:30:00",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={detected}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BugDetected item={item} />}
        windowSize={5}
        ListHeaderComponent={View}
        ListHeaderComponentStyle={{ height: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetectedVideoScreen;

// import React from 'react';
// import { StyleSheet, View, BackHandler } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';

// const DetectedVideoScreen = ({ navigation }) => {
//     useFocusEffect(
//         React.useCallback(() => {
//             const onBackPress = () => {
//                 navigation.navigate('MyPage');
//                 return true;
//             };

//             BackHandler.addEventListener('hardwareBackPress', onBackPress);

//             return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
//         }, [navigation])
//     );

//     return <View style={styles.container}></View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default DetectedVideoScreen;
