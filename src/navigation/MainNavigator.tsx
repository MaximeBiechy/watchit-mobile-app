import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from './RootStackParamList.tsx';
import { HomeScreen } from '../screens/index.ts';

const MainStack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
