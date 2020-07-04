/*
 *
 * RegisterScreen actions
 *
 */

import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from './constants';

export function register(name, username, password, email) {
  return {
    type: REGISTER,
    name,
    username,
    password,
    email,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerFailure(error) {
  return {
    type: REGISTER_FAILURE,
    error,
  };
}
