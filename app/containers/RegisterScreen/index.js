/**
 *
 * RegisterScreen
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
import makeSelectRegisterScreen from './selectors';
import reducer from './reducer';
import saga from './saga';
import { register } from './actions';
import messages from './messages';

export function RegisterScreen({
  navigation,
  registerScreen,
  onRegisterPress,
}) {
  useInjectReducer({ key: 'registerScreen', reducer });
  useInjectSaga({ key: 'registerScreen', saga });

  const { loading, error } = registerScreen;
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <ImageBackground style={styles.containerBackground} source={images.splash}>
      <View>
        <Text style={styles.textGeneral}>Register</Text>
      </View>

      <View>
        <Text style={styles.textError}>{error && error.message}</Text>
      </View>

      <View>
        <TextInput
          style={[styles.textGeneral, styles.inputField]}
          placeholder="Name"
          placeholderTextColor="#a0a0a0"
          underlineColorAndroid="#fff"
          onChangeText={value => setName(value)}
          value={name}
        />
        <TextInput
          style={[styles.textGeneral, styles.inputField]}
          placeholder="Username"
          placeholderTextColor="#a0a0a0"
          underlineColorAndroid="#fff"
          onChangeText={value => setUsername(value)}
          value={username}
        />
        <TextInput
          style={[styles.textGeneral, styles.inputField]}
          placeholder="Password"
          placeholderTextColor="#a0a0a0"
          underlineColorAndroid="#fff"
          secureTextEntry
          onChangeText={value => setPassword(value)}
          value={password}
        />
        <TextInput
          style={[styles.textGeneral, styles.inputField]}
          placeholder="Email"
          placeholderTextColor="#a0a0a0"
          underlineColorAndroid="#fff"
          onChangeText={value => setEmail(value)}
          value={email}
        />
      </View>

      <View>
        {loading ? (
          <View style={styles.buttonRegister}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => {
              onRegisterPress(name, username, password, email);
            }}
          >
            <Text style={[styles.textGeneral, styles.textRegister]}>
              Register
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textLogin}>or Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

RegisterScreen.propTypes = {};

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGeneral: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 20,
  },
  textError: {
    color: '#ff0000',
  },
  inputField: {
    width: device.width - 40,
  },
  buttonRegister: {
    justifyContent: 'center',
    width: device.width - 40,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.45)',
    marginTop: 20,
  },
  textRegister: {
    textAlign: 'center',
  },
  buttonLogin: { marginTop: 20 },
  textLogin: { color: '#fff', fontSize: 18 },
});

const mapStateToProps = createStructuredSelector({
  registerScreen: makeSelectRegisterScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRegisterPress: (name, username, password, email) =>
      dispatch(register(name, username, password, email)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(RegisterScreen);
