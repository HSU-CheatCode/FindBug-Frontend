import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from 'styles/color';
import { forwardRef, useState } from 'react';

export const keyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const returnKeyTypes = {
  NEXT: 'next',
  DONE: 'done',
};

const Input = forwardRef(
  (
    {
      title,
      placeholder,
      value,
      iconName,
      // keyboardType,
      // returnKeyType = returnKeyTypes.DONE,
      // secureTextEntry,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title, //default
            value && styles.hasValueTitle, //value
            isFocused && styles.focusedTitle, //value + focus
          ]}
        >
          {title}
        </Text>
        <View>
          <TextInput
            ref={ref}
            {...props} //전개구문은 항상 제일 위쪽에 덮어쓰여지지 않도록
            value={value}
            style={[
              styles.input,
              value && styles.hasValueInput,
              isFocused && styles.focusedInput,
            ]}
            placeholder={placeholder ?? title}
            placeholderTextColor={GRAY.DEFAULT}
            autoCapitalize={'none'}
            autoCorrect={false}
            //keyboardType={keyboardType}
            //returnKeyType={returnKeyType}
            textContentType={'none'}
            //secureTextEntry={secureTextEntry}
            keyboardAppearance={'light'}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
        </View>
      </View>
    );
  }
);
Input.displayName = 'Input';

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  // keyboardType: PropTypes.oneOf(Object.values(keyboardTypes)),
  // returnKeyType: PropTypes.oneOf(Object.values(returnKeyTypes)),
  // secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GRAY.DEFAULT,
    paddingHorizontal: 20,
    height: 42,
    paddingLeft: 30,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
});

export default Input;
