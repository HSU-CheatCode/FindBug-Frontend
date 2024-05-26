import { useEffect, useRef, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import SafeInputView from '../components/SafeInputViews';
import Input, { keyboardTypes, returnKeyTypes } from '../components/input';

const ModifyUserInfoScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [memo, setMemo] = useState('');
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
      console.log('onSubmit');
    }
  };
  return (
    <SafeInputView>
      <View style={styles.container}>
        <Input
          value={name}
          onChangeText={(text) => setName(text.trim())}
          title={'이름'}
          placeholder={'성을 입력해 주세요.'}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          ref={emailRef}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={'이메일'}
          placeholder={'example@gmail.com'}
          keyboardType={keyboardTypes.EMAIL}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => numberRef.current.focus()}
        />
        <Input
          ref={numberRef}
          value={number}
          onChangeText={(text) => setNumber(text.trim())}
          title={'전화번호'}
          placeholder={'010-0000-0000'}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => addressRef.current.focus()}
        />
        <Input
          ref={addressRef}
          value={address}
          onChangeText={(text) => setAddress(text.trim())}
          title={'주소'}
          placeholder={'주소를 입력해 주세요.'}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => memoRef.current.focus()}
        />
        <Input
          ref={memoRef}
          value={memo}
          onChangeText={(text) => setMemo(text.trim())}
          title={'메모'}
          placeholder={'메모를 입력해 주세요.'}
          keyboardType={keyboardTypes.DEFAULT}
          returnKeyType={returnKeyTypes.DONE}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button title={'저장'} onPress={onSubmit} disabled={disabled} />
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default ModifyUserInfoScreen;
