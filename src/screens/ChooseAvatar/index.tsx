import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';
import { highlightColor } from '../../styles/colors.ts';
import ButtonComponent from '../../components/Button/ButtonComponent.tsx';
import { PADDING_VERTICAL } from '../../styles/responsives.ts';
import { showToast } from '../../utils/toast.tsx';
import { completeOnboarding, selectUserData, setUserAvatar } from '../../store/user/userSlice.ts';
import { updateAvatar } from '../../services/api/users.ts';

const images: number[] = [
  assets.images.Onboarding.avatar.avatar1,
  assets.images.Onboarding.avatar.avatar2,
  assets.images.Onboarding.avatar.avatar3,
  assets.images.Onboarding.avatar.avatar4,
  assets.images.Onboarding.avatar.avatar5,
  assets.images.Onboarding.avatar.avatar6,
  assets.images.Onboarding.avatar.avatar7,
  assets.images.Onboarding.avatar.avatar8,
  assets.images.Onboarding.avatar.avatar9,
  assets.images.Onboarding.avatar.avatar10,
  assets.images.Onboarding.avatar.avatar11,
  assets.images.Onboarding.avatar.avatar12,
  assets.images.Onboarding.avatar.avatar13,
  assets.images.Onboarding.avatar.avatar14,
  assets.images.Onboarding.avatar.avatar15,
  assets.images.Onboarding.avatar.avatar16,
  assets.images.Onboarding.avatar.avatar17,
  assets.images.Onboarding.avatar.avatar18,
  assets.images.Onboarding.avatar.avatar19,
  assets.images.Onboarding.avatar.avatar20,
  assets.images.Onboarding.avatar.avatar21,
];

function ChooseAvatar() {
  const { t } = useTranslation('chooseCharacter');
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleValidation = async () => {
    if (selectedImage === null) {
      showToast('info', t('selectAvatar'));
    } else {
      const response = await updateAvatar(user.id!, selectedImage);
      if (response.error) {
        showToast('error', response.error);
        return;
      }
      dispatch(setUserAvatar(selectedImage));
      dispatch(completeOnboarding());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('title')}</Text>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.imageContainer,
              selectedImage === index && {
                borderColor: highlightColor,
                borderWidth: 2,
              },
            ]}
            onPress={() => setSelectedImage(index)}
          >
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.gridContainer}
        contentContainerStyle={styles.gridContainer}
      />
      <ButtonComponent
        title={t('buttonTitle')}
        onPress={() => {
          handleValidation();
        }}
        buttonStyle={{ marginVertical: PADDING_VERTICAL }}
      />
    </View>
  );
}

export default ChooseAvatar;
