import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BLACK, WHITE } from '../colors';
import HeaderLeftButton from '../components/HeaderLeftButton';
import MyPageScreen from '../Screens/MyPageSreen';
import DetectedVideoScreen from '../Screens/DetectedVideoScreen';
import ModifyCameraInfoScreen from '../Screens/ModifyCameraInfoScreen';
import ModifyUserInfoScreen from '../Screens/ModifyUserInfoScreen';

const Stack = createNativeStackNavigator();

const MyPageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: BLACK,
        headerStyle: { fontWeight: '700' },
        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen name="MyPage" component={MyPageScreen} />
      <Stack.Screen name="DetectedVideo" component={DetectedVideoScreen} />
      <Stack.Screen
        name="ModifyCameraInfo"
        component={ModifyCameraInfoScreen}
      />
      <Stack.Screen name="ModifyUserInfo" component={ModifyUserInfoScreen} />
    </Stack.Navigator>
  );
};

export default MyPageStack;
