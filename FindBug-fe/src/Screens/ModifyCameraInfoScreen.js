import { useEffect, useRef, useState } from 'react';
import { Image, Keyboard, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import SafeInputView from '../components/SafeInputViews';
import Input, { keyboardTypes, returnKeyTypes } from '../components/input';

const ModifyCameraInfoScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

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
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={'email'}
          placeholder={'your@email.com'}
          keyboardType={keyboardTypes.EMAIL}
          returnKeyType={returnKeyTypes.NEXT}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          title={'password'}
          secureTextEntry
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button title={'LOGIN'} onPress={onSubmit} disabled={disabled} />
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

export default ModifyCameraInfoScreen;
