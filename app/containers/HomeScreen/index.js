/**
 *
 * HomeScreen
 *
 */

import React, { memo, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { device, gStyle, colors, fonts } from 'theme';

// components
import Genres from 'components/Genres';
import MediaItemScroller from 'components/MediaItemScroller';
import SlideShow from 'components/SlideShow';

// icons
import SvgBackground from 'images/icons/Svg.Background';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectTop10Games,
  makeSelectTop10GamesLoading,
  makeSelectTop10GamesError,
} from 'containers/App/selectors';
import { getTop10Games } from 'containers/App/actions';
import makeSelectHomeScreen from './selectors';
import reducer from './reducer';
import saga from './saga';

export function HomeScreen({
  dispatch,
  top10Games,
  top10GamesLoading,
  top10GamesError,
  navigation,
}) {
  useInjectReducer({ key: 'homeScreen', reducer });
  useInjectSaga({ key: 'homeScreen', saga });

  useEffect(() => {
    dispatch(getTop10Games());
  }, []);

  const navigateToGameDetails = slug => {
    navigation.navigate('GameDetails', {
      slug,
    });
  };

  return (
    <SafeAreaView style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>

      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <View style={styles.containerHeader}>
          <Text style={styles.logo}>GAMES</Text>
        </View>

        <SlideShow
          style={styles.slideShow}
          games={top10Games}
          loading={top10GamesLoading}
          error={top10GamesError}
          navigateToGameDetails={id => navigateToGameDetails(id)}
        />

        <Text style={styles.headingGenres}>Genres</Text>
        <Genres />

        <Text style={gStyle.heading}>Top Games</Text>
        <MediaItemScroller
          games={top10Games}
          loading={top10GamesLoading}
          error={top10GamesError}
          navigateToGameDetails={id => navigateToGameDetails(id)}
        />

        <View style={gStyle.spacer24} />
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    marginBottom: 8,
    paddingTop: device.iPhoneX ? 30 : 6,
  },
  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 36,
    paddingVertical: 20,
  },
  headingGenres: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    marginTop: 20,
    paddingLeft: 16,
  },
});

const mapStateToProps = createStructuredSelector({
  homeScreen: makeSelectHomeScreen(),
  top10Games: makeSelectTop10Games(),
  top10GamesLoading: makeSelectTop10GamesLoading(),
  top10GamesError: makeSelectTop10GamesError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomeScreen);
