/*
 *
 * LoginScreen reducer
 *
 */
import produce from 'immer';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export const initialState = {
  username: null,
  password: null,
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginScreenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.username = action.username;
        draft.password = action.password;
        draft.loading = true;
        draft.error = null;
        break;
      case LOGIN_SUCCESS:
        // draft.response = action.response;
        draft.loading = false;
        break;
      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default loginScreenReducer;
