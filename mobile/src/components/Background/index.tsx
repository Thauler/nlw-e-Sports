import React from 'react';

import { ImageBackground } from 'react-native';

import backgroundImage from '../../assets/background-galaxy.png'

interface Props {
  children: React.ReactNode;
}

import { styles } from './styles';

export function Background({children}: Props) {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
      >
        {children}
    </ ImageBackground>
  );
}