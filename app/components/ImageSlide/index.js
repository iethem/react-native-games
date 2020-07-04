/**
 *
 * ImageSlide
 *
 */

import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { device } from 'theme';

class ImageSlide extends React.PureComponent {
  render() {
    const { game, navigateToGameDetails } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigateToGameDetails(game.slug)}
      >
        <Image
          source={{ uri: game.background_image }}
          style={{ width: '100%', height: device.height / 4 }}
          resizeMode="cover"
        />
        <Text
          style={{
            marginTop: 10,
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {game.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

ImageSlide.propTypes = {};

export default memo(ImageSlide);
