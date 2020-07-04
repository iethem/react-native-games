import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { API_GAME_SEARCH } from 'utils/paths';
import { SEARCH_GAME } from './constants';
import makeSelectSearchScreen from './selectors';
import { searchGameSuccess, searchGameFailure } from './actions';

export function* searchGame() {
  const { searchQuery } = yield select(makeSelectSearchScreen());
  const requestURL = API_GAME_SEARCH + searchQuery;
  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'react-native-boilerplate-example-app',
    },
  };

  try {
    const response = yield call(request, requestURL, options);
    yield put(searchGameSuccess(response));
  } catch (error) {
    yield put(searchGameFailure(error));
  }
}

// Individual exports for testing
export default function* homeScreenSaga() {
  yield takeLatest(SEARCH_GAME, searchGame);
}
