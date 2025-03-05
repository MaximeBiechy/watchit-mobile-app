import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { highlightColor } from '../../styles/colors.ts';

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function LoaderComponent() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={highlightColor} />
    </View>
  );
}


export default LoaderComponent;
