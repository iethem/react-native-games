import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchScreen state domain
 */

const selectSearchScreenDomain = state => state.searchScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchScreen
 */

const makeSelectSearchScreen = () =>
  createSelector(selectSearchScreenDomain, substate => substate);

const makeSelectSearchResult = () =>
  createSelector(selectSearchScreenDomain, substate => substate.searchResult);

const makeSelectSearchLoading = () =>
  createSelector(selectSearchScreenDomain, substate => substate.searchLoading);

const makeSelectSearchError = () =>
  createSelector(selectSearchScreenDomain, substate => substate.searchError);

export default makeSelectSearchScreen;
export {
  selectSearchScreenDomain,
  makeSelectSearchResult,
  makeSelectSearchLoading,
  makeSelectSearchError,
};
