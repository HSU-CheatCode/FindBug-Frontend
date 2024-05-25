import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MyPageStack from './Navigations/MyPageStack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MyPageStack />
      {/* <TestAvoid /> */}
    </NavigationContainer>
  );
};

export default App;
