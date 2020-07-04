/**
 *
 * GamePlatformIcons
 *
 */

import React, { memo } from 'react';
import { Image, View, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';

import { platforms } from 'theme';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const getPlatformIcon = gamePlatforms =>
  gamePlatforms.map(platform => {
    const slug = platform.platform && platform.platform.slug;
    let icon;
    if (slug === 'pc') icon = 'windows';
    else if (slug === 'mac') icon = 'apple';
    else {
      icon = slug;
    }

    return <Image style={styles.platformIcon} source={platforms[icon]} />;
  });

function GamePlatformIcons({ platforms }) {
  return <View style={styles.platforms}>{getPlatformIcon(platforms)}</View>;
}

GamePlatformIcons.propTypes = {};

const styles = StyleSheet.create({
  platforms: { flexDirection: 'row', marginLeft: 8 },
  platformIcon: { tintColor: '#fff', height: 20, width: 20, marginLeft: 2 },
});

export default memo(GamePlatformIcons);
