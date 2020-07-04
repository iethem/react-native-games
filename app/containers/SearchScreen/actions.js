/*
 *
 * SearchScreen actions
 *
 */

import {
  SEARCH_GAME,
  SEARCH_GAME_SUCCESS,
  SEARCH_GAME_FAILURE,
  CLEAR_SEARCH_RESULTS,
} from './constants';

export function searchGame(query) {
  return {
    type: SEARCH_GAME,
    query,
  };
}

export function searchGameSuccess(result) {
  return {
    type: SEARCH_GAME_SUCCESS,
    result,
  };
}

export function searchGameFailure(error) {
  return {
    type: SEARCH_GAME_FAILURE,
    error,
  };
}

export function clearSearchResults() {
  return {
    type: CLEAR_SEARCH_RESULTS,
  };
}
