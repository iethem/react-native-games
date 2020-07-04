/**
 *
 * LoginScreen
 *
 */

import React, { memo, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { device, images } from 'theme';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import { login } from './actions';
import messages from './messages';

export function LoginScreen({ navigation, loginScreen, onLoginPress }) {
  useInjectReducer({ key: 'loginScreen', reducer });
  useInjectSaga({ key: 'loginScreen', saga });

  const { loading, error } = loginScreen;
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <ImageBackground style={styles.containerBackground} source={images.splash}>
      <View>
        <Text style={styles.textGeneral}>Login</Text>
      </View>

      <View>
        <Text style={styles.textError}>{error && error.message}</Text>
      </View>

      <View>
        <TextInput
          style={[styles.textGeneral, styles.inputUsername]}
          placeholder="Username"
          placeholderTextColor="#a0a0a0"
          underlineColorAndroid="#fff"
          onChangeText={value => setUsername(value)}
          value={username}
        />
        <TextInput
          style={[styles.textGeneral, styles.inputUsername]}
          placeholder="Password"
          placeholderTextColor="#a0a0a0"
          underlineColorAndroid="#fff"
          secureTextEntry
          onChangeText={value => setPassword(value)}
          value={password}
        />
      </View>

      <View>
        {loading ? (
          <View style={styles.buttonLogin}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {
              onLoginPress(username, password);
            }}
          >
            <Text style={[styles.textGeneral, styles.textLogin]}>Login</Text>
          </TouchableOpacity>
        )}
      </View>

      <View>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.textRegister}>or Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

LoginScreen.propTypes = {};

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGeneral: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    paddingVertical: 20,
  },
  textError: {
    color: '#ff0000',
  },
  inputUsername: {
    width: device.width - 40,
  },
  buttonLogin: {
    justifyContent: 'center',
    width: device.width - 40,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.45)',
    marginTop: 20,
  },
  textLogin: {
    textAlign: 'center',
  },
  buttonRegister: { marginTop: 20 },
  textRegister: { color: '#fff', fontSize: 18 },
});

const mapStateToProps = createStructuredSelector({
  loginScreen: makeSelectLoginScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoginPress: (username, password) => dispatch(login(username, password)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LoginScreen);
