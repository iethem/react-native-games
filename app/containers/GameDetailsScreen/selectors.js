import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gameDetailsScreen state domain
 */

const selectGameDetailsScreenDomain = state =>
  state.gameDetailsScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GameDetailsScreen
 */

const makeSelectGameDetailsScreen = () =>
  createSelector(selectGameDetailsScreenDomain, substate => substate);

const makeSelectGame = () =>
  createSelector(selectGameDetailsScreenDomain, substate => substate.game);

const makeSelectGameLoading = () =>
  createSelector(selectGameDetailsScreenDomain, substate => substate.loading);

const makeSelectGameError = () =>
  createSelector(selectGameDetailsScreenDomain, substate => substate.error);

export default makeSelectGameDetailsScreen;
export {
  selectGameDetailsScreenDomain,
  makeSelectGame,
  makeSelectGameLoading,
  makeSelectGameError,
};
