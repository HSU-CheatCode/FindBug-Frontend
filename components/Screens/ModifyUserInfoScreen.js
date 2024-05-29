import { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import SafeInputView from "../components/SafeInputViews";
import Input, { keyboardTypes, returnKeyTypes } from "../components/input";
import Toast from "react-native-toast-message";

const ModifyUserInfoScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [memo, setMemo] = useState("");
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const addressRef = useRef(null);
  const memoRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !number || !address || !memo);
  }, [email, number, address, memo]);

  const onSubmit = () => {
    if (!disabled) {
      Keyboard.dismiss();
      Toast.show({
        type: "success",
        text1: "저장되었습니다.",
      });
    }
  };
  return (
    <SafeInputView>
      <View style={styles.container}>
        <Input
          value={name}
          onChangeText={(text) => setName(text.trim())}
          title={"닉네임"}
          placeholder={"닉네임을 입력해 주세요."}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          ref={emailRef}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={"이메일"}
          placeholder={"example@gmail.com"}
          keyboardType={keyboardTypes.EMAIL}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => numberRef.current.focus()}
        />
        <Input
          ref={numberRef}
          value={number}
          onChangeText={(text) => setNumber(text.trim())}
          title={"전화번호"}
          placeholder={"010-0000-0000"}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => addressRef.current.focus()}
        />
        <Input
          ref={addressRef}
          value={address}
          onChangeText={(text) => setAddress(text.trim())}
          title={"주소"}
          placeholder={"주소를 입력해 주세요."}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => memoRef.current.focus()}
        />
        <Input
          ref={memoRef}
          value={memo}
          onChangeText={(text) => setMemo(text.trim())}
          title={"메모"}
          placeholder={"메모를 입력해 주세요."}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.DONE}
          onSubmitEditing={onSubmit}
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

export default ModifyUserInfoScreen;

// import { useEffect, useRef, useState } from 'react';
// import { Keyboard, StyleSheet, View, BackHandler } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Button from '../components/Button';
// import SafeInputView from '../components/SafeInputViews';
// import Input, { keyboardTypes, returnKeyTypes } from '../components/input';

// const ModifyUserInfoScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [memo, setMemo] = useState('');
//   const emailRef = useRef(null);
//   const numberRef = useRef(null);
//   const addressRef = useRef(null);
//   const memoRef = useRef(null);
//   const [disabled, setDisabled] = useState(true);

//   const navigation = useNavigation();

//   useEffect(() => {
//     setDisabled(!email || !number || !address || !memo);
//   }, [email, number, address, memo]);

//   useEffect(() => {
//     const backAction = () => {
//       navigation.navigate('MyPageScreen');
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

//     return () => backHandler.remove();
//   }, [navigation]);

//   const onSubmit = () => {
//     if (!disabled) {
//       Keyboard.dismiss();
//       console.log('onSubmit');
//     }
//   };

//   return (
//     <SafeInputView>
//       <View style={styles.container}>
//         <Input
//           value={name}
//           onChangeText={(text) => setName(text.trim())}
//           title={'이름'}
//           placeholder={'성을 입력해 주세요.'}
//           keyboardType={keyboardTypes.DEFAULT}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => emailRef.current.focus()}
//         />
//         <Input
//           ref={emailRef}
//           value={email}
//           onChangeText={(text) => setEmail(text.trim())}
//           title={'이메일'}
//           placeholder={'example@gmail.com'}
//           keyboardType={keyboardTypes.EMAIL}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => numberRef.current.focus()}
//         />
//         <Input
//           ref={numberRef}
//           value={number}
//           onChangeText={(text) => setNumber(text.trim())}
//           title={'전화번호'}
//           placeholder={'010-0000-0000'}
//           keyboardType={keyboardTypes.DEFAULT}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => addressRef.current.focus()}
//         />
//         <Input
//           ref={addressRef}
//           value={address}
//           onChangeText={(text) => setAddress(text.trim())}
//           title={'주소'}
//           placeholder={'주소를 입력해 주세요.'}
//           keyboardType={keyboardTypes.DEFAULT}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => memoRef.current.focus()}
//         />
//         <Input
//           ref={memoRef}
//           value={memo}
//           onChangeText={(text) => setMemo(text.trim())}
//           title={'메모'}
//           placeholder={'메모를 입력해 주세요.'}
//           keyboardType={keyboardTypes.DEFAULT}
//           returnKeyType={returnKeyTypes.DONE}
//           onSubmitEditing={onSubmit}
//         />
//         <View style={styles.buttonContainer}>
//           <Button title={'저장'} onPress={onSubmit} disabled={disabled} />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button title={'뒤로가기'} onPress={() => navigation.navigate('MyPageScreen')} />
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

// export default ModifyUserInfoScreen;

// import React, { useEffect, useRef, useState } from 'react';
// import { Keyboard, StyleSheet, View, BackHandler } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import Button from '../components/Button';
// import SafeInputView from '../components/SafeInputViews';
// import Input, { keyboardTypes, returnKeyTypes } from '../components/input';

// const ModifyUserInfoScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [memo, setMemo] = useState('');
//   const emailRef = useRef(null);
//   const numberRef = useRef(null);
//   const addressRef = useRef(null);
//   const memoRef = useRef(null);
//   const [disabled, setDisabled] = useState(true);

//   const navigation = useNavigation();

//   useEffect(() => {
//     setDisabled(!email || !number || !address || !memo);
//   }, [email, number, address, memo]);

//   useFocusEffect(
//     React.useCallback(() => {
//       const backAction = () => {
//         navigation.navigate('MyPage');
//         return true;
//       };

//       const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

//       return () => backHandler.remove();
//     }, [navigation])
//   );

//   const onSubmit = () => {
//     if (!disabled) {
//       Keyboard.dismiss();
//       console.log('onSubmit');
//     }
//   };

//   return (
//     <SafeInputView>
//       <View style={styles.container}>
//         <Input
//           value={name}
//           onChangeText={(text) => setName(text.trim())}
//           title={'이름'}
//           placeholder={'성을 입력해 주세요.'}
//           keyboardType={keyboardTypes.DEFAULT}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => emailRef.current.focus()}
//         />
//         <Input
//           ref={emailRef}
//           value={email}
//           onChangeText={(text) => setEmail(text.trim())}
//           title={'이메일'}
//           placeholder={'example@gmail.com'}
//           keyboardType={keyboardTypes.EMAIL}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => numberRef.current.focus()}
//         />
//         <Input
//           ref={numberRef}
//           value={number}
//           onChangeText={(text) => setNumber(text.trim())}
//           title={'전화번호'}
//           placeholder={'010-0000-0000'}
//           keyboardType={keyboardTypes.DEFAULT}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => addressRef.current.focus()}
//         />
//         <Input
//           ref={addressRef}
//           value={address}
//           onChangeText={(text) => setAddress(text.trim())}
//           title={'주소'}
//           placeholder={'주소를 입력해 주세요.'}
//           keyboardType={keyboardTypes.DEFAULT}
//           returnKeyType={returnKeyTypes.NEXT}
//           onSubmitEditing={() => memoRef.current.focus()}
//         />
//         <Input
//           ref={memoRef}
//           value={memo}
//           onChangeText={(text) => setMemo(text.trim())}
//           title={'메모'}
//           placeholder={'메모를 입력해 주세요.'}
//           keyboardType={keyboardTypes.DEFAULT}
//           returnKeyType={returnKeyTypes.DONE}
//           onSubmitEditing={onSubmit}
//         />
//         <View style={styles.buttonContainer}>
//           <Button title={'저장'} onPress={onSubmit} disabled={disabled} />
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

// export default ModifyUserInfoScreen;
