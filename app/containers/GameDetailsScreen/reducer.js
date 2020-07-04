/*
 *
 * GameDetailsScreen reducer
 *
 */
import produce from 'immer';
import {
  GET_GAME_DETAIL,
  GET_GAME_DETAIL_SUCCESS,
  GET_GAME_DETAIL_FAILURE,
} from './constants';

export const initialState = {
  slug: null,
  game: null,
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_GAME_DETAIL:
        draft.slug = action.slug;
        draft.loading = true;
        draft.error = null;
        break;
      case GET_GAME_DETAIL_SUCCESS:
        draft.game = action.game;
        draft.loading = false;
        break;
      case GET_GAME_DETAIL_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default appReducer;
