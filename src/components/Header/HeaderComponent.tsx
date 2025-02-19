import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import styles from './styles.ts';
import assets from '../../assets/assets.ts';

interface HeaderProps {
  title: string;
  showLeftIcon?: boolean;
  rightIcon?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

function HeaderComponent({ title, showLeftIcon = false, rightIcon, onLeftPress, onRightPress }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSide}>
        {showLeftIcon && onLeftPress && (
          <TouchableOpacity onPress={onLeftPress}>
            <Icon name={assets.icons.arrowLeft} size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightSide}>
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            <Icon name={rightIcon} size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export const renderHeader = (
  title: string,
  navigation: NavigationProp<any>,
  showLeftIcon: boolean,
  rightIcon?: string,
  onRightPress?: () => void,
) => (
  <HeaderComponent
    title={title}
    showLeftIcon={showLeftIcon}
    onLeftPress={() => navigation.goBack()}
    rightIcon={rightIcon}
    onRightPress={onRightPress}
  />
);

export default HeaderComponent;
