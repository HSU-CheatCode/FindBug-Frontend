import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GRAY } from '../colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MyPageList from '../components/MyPageList';

const MyPageScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const menu = [
    {
      id: 1,
      title: '감지영상',
      onPress: () => {
        navigation.push('DetectedVideo');
      },
    },
    {
      id: 2,
      title: '카메라 정보 수정',
      onPress: () => {
        navigation.push('ModifyCameraInfo');
      },
    },
    {
      id: 3,
      title: '회원 정보 수정',
      onPress: () => {
        navigation.push('ModifyUserInfo');
      },
    },
  ];

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.userinfo}>
        <View style={styles.button}></View>
        <View style={styles.text}>
          <Text style={styles.username}>곽승준</Text>
          <Text style={styles.userstatus}>이 세상의 선각자</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={menu}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MyPageList item={item} />}
          windowSize={5}
          ListHeaderComponent={View}
          ListHeaderComponentStyle={{ height: 10 }}
          ItemSeparatorComponent={
            <View style={{ height: 1, backgroundColor: GRAY.LIGHT }} />
          }
        />
      </View>
      <View style={{ height: 1.5, backgroundColor: GRAY.LIGHT }} />
      <View style={styles.logoutcontainer}>
        <Text style={styles.logout}>로그아웃</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  userinfo: {
    width: '100%',
    paddingHorizontal: 24,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    marginLeft: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userstatus: {
    fontSize: 16,
  },
  button: {
    width: 88,
    height: 88,
    backgroundColor: GRAY.LIGHT,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 16,
  },
  logoutcontainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    paddingHorizontal: 24,
  },
  logout: {
    fontSize: 14,
    color: GRAY.LIGHT,
    paddingVertical: 50,
  },
});

export default MyPageScreen;
