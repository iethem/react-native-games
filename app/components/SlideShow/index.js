/**
 *
 * SlideShow
 *
 */

import React, { memo } from 'react';
import Carousel from 'react-native-snap-carousel';

import { device, images } from 'theme';

import ImageSlide from 'components/ImageSlide';
import ActivityIndicator from 'components/ActivityIndicator';

const itemWidth = device.width - 100;

class SlideShow extends React.Component {
  render() {
    const { games, loading, error, navigateToGameDetails } = this.props;

    if (loading) return <ActivityIndicator size="large" />;

    // TODO add error
    if (error) return null;

    return (
      <Carousel
        ref={c => {
          this.carousel = c;
        }}
        autoplay
        autoplayInterval={5000}
        data={games}
        loop
        renderItem={({ item }) => (
          <ImageSlide
            navigateToGameDetails={navigateToGameDetails}
            game={item}
            width={itemWidth}
          />
        )}
        sliderWidth={device.width}
        itemWidth={itemWidth}
      />
    );
  }
}

SlideShow.propTypes = {};

export default memo(SlideShow);
