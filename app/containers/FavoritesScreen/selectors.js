import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the favoritesScreen state domain
 */

const selectFavoritesScreenDomain = state =>
  state.favoritesScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FavoritesScreen
 */

const makeSelectFavoritesScreen = () =>
  createSelector(selectFavoritesScreenDomain, substate => substate);

export default makeSelectFavoritesScreen;
export { selectFavoritesScreenDomain };
