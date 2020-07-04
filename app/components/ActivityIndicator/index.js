/**
 *
 * ActivityIndicator
 *
 */

import React, { memo } from 'react';
import { ActivityIndicator as Indicator, StyleSheet, View } from 'react-native';
// import PropTypes from 'prop-types';

function ActivityIndicator(props) {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Indicator size={props.size || 'small'} color={props.color || '#fff'} />
    </View>
  );
}

ActivityIndicator.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default memo(ActivityIndicator);
