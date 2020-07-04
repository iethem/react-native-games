/*
 *
 * GameDetailsScreen actions
 *
 */

import {
  GET_GAME_DETAIL,
  GET_GAME_DETAIL_SUCCESS,
  GET_GAME_DETAIL_FAILURE,
} from './constants';

export function getGameDetails(slug) {
  return {
    type: GET_GAME_DETAIL,
    slug,
  };
}

export function getGameDetailsSuccess(game) {
  return {
    type: GET_GAME_DETAIL_SUCCESS,
    game,
  };
}

export function getGameDetailsFailure(error) {
  return {
    type: GET_GAME_DETAIL_FAILURE,
    error,
  };
}
