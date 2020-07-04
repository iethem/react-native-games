/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  GET_TOP10_GAMES,
  GET_TOP10_GAMES_SUCCESS,
  GET_TOP10_GAMES_FAILURE,
  SET_ACTIVE_USER,
} from './constants';

export const initialState = {
  top10Games: [],
  top10GamesLoading: false,
  top10GamesError: null,
  activeUser: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TOP10_GAMES:
        draft.top10GamesLoading = true;
        draft.top10GamesError = null;
        break;
      case GET_TOP10_GAMES_SUCCESS:
        draft.top10Games = action.games;
        draft.top10GamesLoading = false;
        break;
      case GET_TOP10_GAMES_FAILURE:
        draft.top10GamesLoading = false;
        draft.top10GamesError = action.error;
        break;
      case SET_ACTIVE_USER:
        draft.activeUser = action.user;
        break;
    }
  });

export default appReducer;
