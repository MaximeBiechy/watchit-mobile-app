import { Image, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import assets from '../../assets/assets.ts';
import styles from './styles.ts';
import ButtonComponent from '../../components/Button/ButtonComponent.tsx';

function ChooseConnectionMode() {
  const { t } = useTranslation('chooseConnectionMode');

  return (
    <View style={styles.container}>
      <Image source={assets.images.logo} style={styles.appLogo} />
      <Text style={styles.appTitle}>Watch It</Text>
      <Text style={[styles.introText]}>{t('intro')}</Text>
      <ButtonComponent title={t('signup')} onPress={() => {}} buttonStyle={{ margin: 40 }} />
      <View style={styles.textContainer}>
        <Text style={[styles.bodyText, styles.questionText]}>{t('question')}</Text>
        <Text style={[styles.functionText]} onPress={() => {}}>
          {t('login')}
        </Text>
      </View>
      <View style={styles.optionModeConnectionContainer}>
        <View style={styles.line} />
        <Text style={[styles.bodyText, styles.optionModeConnectionText]}>{t('optionModeConnection')}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.OAuthContainer}>
        <Image source={assets.images.SocialsMedia.google} />
        <Image source={assets.images.SocialsMedia.apple} />
        <Image source={assets.images.SocialsMedia.facebook} />
      </View>
    </View>
  );
}

export default ChooseConnectionMode;
