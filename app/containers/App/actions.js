/*
 *
 * App actions
 *
 */

import {
  GET_TOP10_GAMES,
  GET_TOP10_GAMES_SUCCESS,
  GET_TOP10_GAMES_FAILURE,
  SET_ACTIVE_USER,
} from './constants';

export function getTop10Games() {
  return {
    type: GET_TOP10_GAMES,
  };
}

export function getTop10GamesSuccess(games) {
  return {
    type: GET_TOP10_GAMES_SUCCESS,
    games,
  };
}

export function getTop10GamesFailure(error) {
  return {
    type: GET_TOP10_GAMES_FAILURE,
    error,
  };
}

export function setActiveUser(user) {
  return {
    type: SET_ACTIVE_USER,
    user,
  };
}
