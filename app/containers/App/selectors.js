import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.app || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate);

const makeSelectActiveUser = () =>
  createSelector(selectAppDomain, substate => substate.activeUser);

const makeSelectTop10Games = () =>
  createSelector(selectAppDomain, substate => substate.top10Games);

const makeSelectTop10GamesLoading = () =>
  createSelector(selectAppDomain, substate => substate.top10GamesLoading);

const makeSelectTop10GamesError = () =>
  createSelector(selectAppDomain, substate => substate.top10GamesError);

export default makeSelectApp;
export {
  selectAppDomain,
  makeSelectActiveUser,
  makeSelectTop10Games,
  makeSelectTop10GamesLoading,
  makeSelectTop10GamesError,
};
