/*
 *
 * SearchScreen reducer
 *
 */
import produce from 'immer';
import {
  SEARCH_GAME,
  SEARCH_GAME_SUCCESS,
  SEARCH_GAME_FAILURE,
  CLEAR_SEARCH_RESULTS,
} from './constants';

export const initialState = {
  searchQuery: null,
  searchResult: {
    results: [],
  },
  searchLoading: false,
  searchError: null,
};

/* eslint-disable default-case, no-param-reassign */
const searchScreenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH_GAME:
        draft.searchLoading = true;
        draft.searchResult = { results: [] };
        draft.searchError = null;
        draft.searchQuery = action.query;
        break;
      case SEARCH_GAME_SUCCESS:
        draft.searchLoading = false;
        draft.searchResult = action.result;
        break;
      case SEARCH_GAME_FAILURE:
        draft.searchLoading = false;
        draft.searchError = action.error;
        break;
      case CLEAR_SEARCH_RESULTS:
        draft.searchResult = { results: [] };
        break;
    }
  });

export default searchScreenReducer;
