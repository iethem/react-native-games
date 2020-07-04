/*
 *
 * LoginScreen actions
 *
 */

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export function login(username, password) {
  return {
    type: LOGIN,
    username,
    password,
  };
}

export function loginSuccess(/* response */) {
  return {
    type: LOGIN_SUCCESS,
    /* response */
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}
