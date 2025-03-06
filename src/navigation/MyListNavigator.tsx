import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyListStackParamList } from './RootStackParamList.tsx';
import { MyListScreen } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../styles/responsives.ts';
import { animation, animationDuration } from '../styles/transitionScreens.ts';

const MyListStack = createNativeStackNavigator<MyListStackParamList>();

function MyListNavigator() {
  return (
    <MyListStack.Navigator
      initialRouteName="MyList"
      screenOptions={{
        contentStyle: { paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_VERTICAL },
        animation, // ? Avoid flickering effect when navigating between screens
        animationDuration, // ? It doesn't seem to work
      }}
    >
      <MyListStack.Screen
        name="MyList"
        component={MyListScreen}
        options={({ navigation }) => ({
          header: () => renderHeader('My List', navigation, false),
        })}
      />
    </MyListStack.Navigator>
  );
}

export default MyListNavigator;
