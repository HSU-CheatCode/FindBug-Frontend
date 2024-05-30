import { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import SafeInputView from "../components/SafeInputViews";
import Input, { keyboardTypes, returnKeyTypes } from "../components/input";
import Toast from "react-native-toast-message";
import axios from "axios";

const ModifyCameraInfoScreen = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [memo, setMemo] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [created, setCreated] = useState(null);
  const numberRef = useRef(null);
  const memoRef = useRef(null);

  useEffect(() => {
    setDisabled(!name || !number);
  }, [name, number]);

  const onSubmit = () => {
    const cameraType = "RASPBERRYPI_3_B_PLUS";
    if (!disabled) {
      Keyboard.dismiss();
      const response = axios
        .post(`http://findbugs.kro.kr/myPage/1/camera`, {
          name: name,
          imei: number,
          description: memo,
          cameraType: cameraType,
        })
        .then((response) => {
          console.log(response.data.created);
          Toast.show({
            type: "success",
            text1: "저장되었습니다.",
          });
        })
        .catch((error) => {
          Toast.show({
            type: "error",
            text1: "저장이 전송되지 않았습니다.",
          });
        });
    }
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Input
          value={name}
          onChangeText={(text) => setName(text.trim())}
          title={"카메라 이름"}
          placeholder={"카메라 이름을 입력하시오."}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => numberRef.current.focus()}
        />
        <Input
          ref={numberRef}
          value={number}
          onChangeText={(text) => setNumber(text.trim())}
          title={"카메라 번호"}
          placeholder={"카메라 번호를 입력하시오."}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => memoRef.current.focus()}
        />
        <Input
          ref={memoRef}
          value={memo}
          onChangeText={(text) => setMemo(text.trim())}
          title={"메모"}
          placeholder={"자유롭게 입력하시오."}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"저장"} onPress={onSubmit} disabled={disabled} />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "column-reverse",
  },
});

export default ModifyCameraInfoScreen;

// import React, { useEffect, useRef, useState } from 'react';
// import { Keyboard, StyleSheet, View, BackHandler } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import Button from '../components/Button';
// import SafeInputView from '../components/SafeInputViews';
// import Input, { keyboardTypes, returnKeyTypes } from '../components/input';

// const ModifyCameraInfoScreen = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const passwordRef = useRef(null);
//   const [disabled, setDisabled] = useState(true);

//   useEffect(() => {
//     setDisabled(!email || !password);
//   }, [email, password]);

//   const onSubmit = () => {
//     if (!disabled) {
//       Keyboard.dismiss();
//       console.log('onSubmit');
//     }
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       const onBackPress = () => {
//         navigation.navigate('MyPage');
//         return true; // Returning true prevents the default back button behavior
//       };

//       BackHandler.addEventListener('hardwareBackPress', onBackPress);

//       return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
//     }, [navigation])
//   );

//   return (
//     <SafeInputView>
//       <View style={styles.container}>
//         <Input
//           value={email}
//           onChangeText={(text) => setEmail(text.trim())}
//           title={'email'}
//           placeholder={'your@email.com'}
//           keyboardType={keyboardTypes.EMAIL}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => passwordRef.current.focus()}
//         />
//         <Input
//           ref={passwordRef}
//           value={password}
//           onChangeText={(text) => setPassword(text.trim())}
//           title={'password'}
//           secureTextEntry
//           onSubmitEditing={onSubmit}
//         />
//         <View style={styles.buttonContainer}>
//           <Button title={'LOGIN'} onPress={onSubmit} disabled={disabled} />
//         </View>
//       </View>
//     </SafeInputView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     width: '100%',
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
// });

// export default ModifyCameraInfoScreen;
