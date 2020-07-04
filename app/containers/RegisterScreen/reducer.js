/*
 *
 * RegisterScreen reducer
 *
 */
import produce from 'immer';
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from './constants';

export const initialState = {
  name: null,
  username: null,
  password: null,
  email: null,
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const registerScreenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER:
        draft.name = action.name;
        draft.username = action.username;
        draft.password = action.password;
        draft.email = action.email;
        draft.name = action.name;
        draft.loading = true;
        draft.error = null;
        break;
      case REGISTER_SUCCESS: 
        draft.loading = false;
        break;
      case REGISTER_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default registerScreenReducer;
