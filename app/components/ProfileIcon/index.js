/**
 *
 * ProfileIcon
 *
 */

import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors, images } from 'theme';
import PropTypes from 'prop-types';

const ProfileIcon = ({ active }) => {
  const borderColor = active ? { borderColor: colors.white } : {};

  return (
    <View style={[styles.containerProfile, borderColor]}>
      <Image source={images.stormtrooper} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerProfile: {
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 40,
  },
  avatar: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
});

ProfileIcon.propTypes = {
  active: PropTypes.bool,
};

export default memo(ProfileIcon);
