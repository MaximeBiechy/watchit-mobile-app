import { useDispatch } from 'react-redux';
import { Button, Text, View } from 'react-native';
import { completeOnboarding } from '../../store/user/userSlice.ts';

function Onboarding1Screen() {
  const dispatch = useDispatch();

  const handleCompleteOnboarding = () => {
    dispatch(completeOnboarding());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
      <Text>Onboarding Screen</Text>
      <Button title="Complete Onboarding" onPress={handleCompleteOnboarding} />
    </View>
  );
}

export default Onboarding1Screen;
