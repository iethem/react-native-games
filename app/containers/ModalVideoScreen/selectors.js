import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the modalVideoScreen state domain
 */

const selectModalVideoScreenDomain = state => state.modalVideoScreen || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ModalVideoScreen
 */

const makeSelectModalVideoScreen = () =>
  createSelector(selectModalVideoScreenDomain, substate => substate);

export default makeSelectModalVideoScreen;
export { selectModalVideoScreenDomain };
