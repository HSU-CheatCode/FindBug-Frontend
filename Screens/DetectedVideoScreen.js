import BugDetected from "@components/BugDetected";
import "react-native-get-random-values";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";

const DetectedVideoScreen = () => {
  const [detected, setDetected] = useState([]);
  const { getItem, setItem } = useAsyncStorage("detected");

  const save = async (data) => {
    try {
      await setItem(JSON.stringify(data));
      setDetected(data);
    } catch (e) {
      Alert.alert("저장 실패");
    }
  };
  const load = async () => {
    try {
      const data = await getItem();
      setDetected(JSON.parse(data || "[]"));
    } catch (e) {
      Alert.alert("불러오기 실패");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://findbugs.kro.kr/myPage/1/alarms"
        );
        setDetected([]);
        const data = response.data;
        data.alarmListDto.map((item) => {
          onInsert(
            item.alarmId,
            item.imageUrl,
            item.cameraName,
            item.bugName,
            item.createAt
          );
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    load();
  }, []);

  const onInsert = (id, image, cam, bug, time) => {
    const newDetected = { id, image, cam, bug, time };
    setDetected((prevDetected) => {
      const updatedDetected = [newDetected, ...prevDetected]; // 이전 데이터와 병합
      save(updatedDetected); // 병합된 데이터 저장
      return updatedDetected; // 병합된 데이터 반환
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={detected}
        keyExtractor={(item) => item.id}
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
