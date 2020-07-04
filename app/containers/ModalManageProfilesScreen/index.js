/**
 *
 * ModalManageProfilesScreen
 *
 */

import React, { memo, useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { colors, fonts, gStyle, images } from 'theme';

// components
import HeaderManage from 'components/HeaderManage';

// icons
import SvgEdit from 'images/icons/Svg.Edit';
import SvgPlus from 'images/icons/Svg.Plus';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectModalManageProfilesScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ModalManageProfilesScreen(props) {
  useInjectReducer({ key: 'modalManageProfilesScreen', reducer });
  useInjectSaga({ key: 'modalManageProfilesScreen', saga });

  const { navigation } = props;

  return (
    <View style={[gStyle.container, { backgroundColor: colors.black }]}>
      <HeaderManage navigation={navigation} />

      <View style={styles.container}>
        <View style={styles.containerUser}>
          <Image source={images.robot} style={styles.avatar} />
          <Text style={styles.text}>Caleb</Text>
          <View style={styles.overlay} />
          <View style={styles.containerSvg}>
            <SvgEdit active size={40} />
          </View>
        </View>
        <View style={styles.containerUser}>
          <Image source={images.penguin} style={styles.avatar} />
          <Text style={styles.text}>Kim</Text>
          <View style={styles.overlay} />
          <View style={styles.containerSvg}>
            <SvgEdit active size={40} />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('ModalAddProfile')}
          style={styles.containerUser}
        >
          <View style={styles.containerPlus}>
            <View style={styles.plusBackground}>
              <SvgPlus active size={40} />
            </View>
          </View>
          <Text style={styles.text}>Add Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

ModalManageProfilesScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const BLOCK_SIZE = 108;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 60,
    width: 280,
  },
  containerUser: {
    marginBottom: 16,
  },
  containerSvg: {
    alignItems: 'center',
    height: BLOCK_SIZE,
    justifyContent: 'center',
    position: 'absolute',
    width: BLOCK_SIZE,
  },
  overlay: {
    backgroundColor: colors.black50,
    height: BLOCK_SIZE,
    top: 0,
    position: 'absolute',
    width: BLOCK_SIZE,
  },
  avatar: {
    height: BLOCK_SIZE,
    resizeMode: 'contain',
    width: BLOCK_SIZE,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginTop: 8,
    textAlign: 'center',
  },
  containerPlus: {
    alignItems: 'center',
    height: BLOCK_SIZE,
    justifyContent: 'center',
    width: BLOCK_SIZE,
  },
  plusBackground: {
    alignItems: 'center',
    backgroundColor: colors.moreAddProfileBg,
    borderRadius: 34,
    height: 68,
    justifyContent: 'center',
    width: 68,
  },
});

const mapStateToProps = createStructuredSelector({
  modalManageProfilesScreen: makeSelectModalManageProfilesScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ModalManageProfilesScreen);
