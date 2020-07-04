/**
 *
 * ProfileAppSettingsScreen
 *
 */

import React, { memo, useLayoutEffect } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { colors, fonts, gStyle } from 'theme';

import Header from 'components/Header';
import TouchLineItemApp from 'components/TouchLineItemApp';
import TouchLineItemElement from 'components/TouchLineItemElement';

// icons
import SvgBackground from 'images/icons/Svg.Background';
import SvgTrash from 'images/icons/Svg.Trash';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfileAppSettingsScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const alertDeleteDownloads = () => {
  Alert.alert(
    'Delete All Downloads',
    'Are you sure you want to delete this one download?',
    [
      {
        text: 'Cancel',
      },
      {
        style: 'destructive',
        text: 'Delete',
      },
    ],
    {
      cancelable: false,
    },
  );
};

export function ProfileAppSettingsScreen(props) {
  useInjectReducer({ key: 'profileAppSettingsScreen', reducer });
  useInjectSaga({ key: 'profileAppSettingsScreen', saga });

  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text>
          <FormattedMessage {...messages.title} />
        </Text>
      ),
    });
  }, []);

  return (
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>

      <ScrollView>
        <Header navigation={navigation} showBack title="App Settings" />

        <View style={styles.containerHeading}>
          <Text style={styles.heading}>Video Playback</Text>
        </View>

        <TouchLineItemApp
          onPress={() => null}
          tagline="Automatic"
          text="Cellular Data Usage"
        />

        <View style={styles.containerHeading}>
          <Text style={styles.heading}>Downloads</Text>
        </View>

        <TouchLineItemApp
          onPress={() => null}
          tagline="Standard"
          text="Video Quality"
        />

        <TouchLineItemElement
          onPress={() => alertDeleteDownloads()}
          element={<SvgTrash size={20} />}
          text="Delete All Downloads"
        />

        <View style={styles.containerDevice}>
          <Text style={styles.deviceText}>IOS/ANDROID</Text>
          <View style={styles.containerStorage}>
            <View style={styles.storageUsed} />
            <View style={styles.storageDisneyPlus} />
          </View>
          <View style={styles.containerIndex}>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.used]} />
              <Text style={styles.deviceText}>Used</Text>
            </View>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.disneyPlus]} />
              <Text style={styles.deviceText}>Disney+</Text>
            </View>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.storage]} />
              <Text style={styles.deviceText}>Free</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

ProfileAppSettingsScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  containerHeading: {
    borderBottomColor: colors.moreSectionBorder,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  heading: {
    color: colors.moreSectionText,
    fontFamily: fonts.light,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  containerDevice: {
    borderBottomColor: colors.moreSectionBorder,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 8,
    paddingVertical: 8,
  },
  deviceText: {
    color: colors.white,
  },
  containerStorage: {
    backgroundColor: colors.moreFree,
    flexDirection: 'row',
    height: 10,
    marginVertical: 8,
    width: '100%',
  },
  storageUsed: {
    backgroundColor: colors.moreUsed,
    height: '100%',
    width: '24%',
  },
  storageDisneyPlus: {
    backgroundColor: colors.storageBlue,
    height: '100%',
    width: '4%',
  },
  containerIndex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerIndexBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indexBlock: {
    borderRadius: 3,
    height: 14,
    marginRight: 10,
    width: 14,
  },
  storage: {
    backgroundColor: colors.moreFree,
  },
  used: {
    backgroundColor: colors.moreUsed,
  },
  disneyPlus: {
    backgroundColor: colors.storageBlue,
  },
});

const mapStateToProps = createStructuredSelector({
  profileAppSettingsScreen: makeSelectProfileAppSettingsScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ProfileAppSettingsScreen);
