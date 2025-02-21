import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import assets from '../../assets/assets.ts';
import styles from './styles.ts';
import ButtonComponent from '../../components/Button/ButtonComponent.tsx';
import { AuthNavigationProp } from '../../navigation/RootStackParamList.tsx';

function ChooseConnectionModeScreen() {
  const { t } = useTranslation('chooseConnectionMode');
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <View style={styles.container}>
      <Image source={assets.images.logo} style={styles.appLogo} />
      <Text style={styles.appTitle}>Watch It</Text>
      <Text style={[styles.introText]}>{t('intro')}</Text>
      <ButtonComponent
        title={t('signup')}
        onPress={() => {
          navigation.navigate('Signup');
        }}
        buttonStyle={{ margin: 40 }}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.bodyText, styles.questionText]}>{t('question')}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={[styles.functionText]}>{t('login')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionModeConnectionContainer}>
        <View style={styles.line} />
        <Text style={[styles.bodyText, styles.optionModeConnectionText]}>{t('optionModeConnection')}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.OAuthContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={assets.images.SocialsMedia.google} style={styles.OAuth} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={assets.images.SocialsMedia.apple} style={styles.OAuth} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={assets.images.SocialsMedia.facebook} style={styles.OAuth} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ChooseConnectionModeScreen;
