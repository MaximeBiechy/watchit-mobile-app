import { Image, StyleSheet, Text, View } from 'react-native';
import { navigationTopBarTitle, bodyInfo } from '../../styles/typography.ts';
import { gray } from '../../styles/colors.ts';

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  errorText: {
    color: 'white',
    ...navigationTopBarTitle,
    textAlign: 'center',
    marginBottom: 8,
  },
  additionalText: {
    ...bodyInfo,
    color: gray,
    textAlign: 'center',
  },
});

interface ErrorComponentProps {
  error: string;
  imageSource: any;
  additionalText: string;
}

function ErrorComponent({ error, imageSource, additionalText }: ErrorComponentProps) {
  return (
    <View style={styles.errorContainer}>
      <Image source={imageSource} style={styles.errorImage} />
      <Text style={styles.errorText}>{error}</Text>
      <Text style={styles.additionalText}>{additionalText}</Text>
    </View>
  );
}

export default ErrorComponent;
