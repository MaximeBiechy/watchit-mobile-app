import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyListStackParamList } from './RootStackParamList.tsx';
import { MyList } from '../screens/index.ts';
import { renderHeader } from '../components/Header/HeaderComponent.tsx';

const MyListStack = createNativeStackNavigator<MyListStackParamList>();

function MyListNavigator() {
  return (
    <MyListStack.Navigator initialRouteName="MyList">
      <MyListStack.Screen
        name="MyList"
        component={MyList}
        options={({ navigation }) => ({
          header: () => renderHeader('My List', navigation, false),
        })}
      />
    </MyListStack.Navigator>
  );
}

export default MyListNavigator;
