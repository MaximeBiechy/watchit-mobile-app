import { StyleSheet, View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

function AdBanner() {
  return (
    <View style={styles.container}>
      <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.BANNER} requestOptions={{ requestNonPersonalizedAdsOnly: true }} />
    </View>
  );
}

export default AdBanner;
