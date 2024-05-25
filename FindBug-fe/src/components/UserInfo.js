import { Button, StyleSheet } from 'react-native';
import { GRAY } from '../colors';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={() => {}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: GRAY.DEFAULT,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 16,
  },
});

export default UserInfo;
