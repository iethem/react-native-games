/**
 *
 * ModalVideoScreen
 *
 */

import React, { memo, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { gStyle } from 'theme';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectModalVideoScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ModalVideoScreen(props) {
  useInjectReducer({ key: 'modalVideoScreen', reducer });
  useInjectSaga({ key: 'modalVideoScreen', saga });

  // componentDidMount() {
    //   ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
    // }
    
    // componentWillUnmount() {
      //   ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
      // }

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
      <Text style={gStyle.heading}>Modal :: Video</Text>
    </View>
  );
}

ModalVideoScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  modalVideoScreen: makeSelectModalVideoScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ModalVideoScreen);
