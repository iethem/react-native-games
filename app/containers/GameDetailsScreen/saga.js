import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { API_GAME_DETAILS } from 'utils/paths';
import { GET_GAME_DETAIL } from './constants';
import { getGameDetailsSuccess, getGameDetailsFailure } from './actions';
import makeSelectGameDetailsScreen from './selectors';

export function* getGameDetails() {
  const { slug } = yield select(makeSelectGameDetailsScreen());
  const requestURL = `${API_GAME_DETAILS}/${slug}`;
  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'react-native-boilerplate-example-app',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, options);
    yield put(getGameDetailsSuccess(response));
  } catch (error) {
    yield put(getGameDetailsFailure(error));
  }
}

// Individual exports for testing
export default function* homeScreenSaga() {
  yield takeLatest(GET_GAME_DETAIL, getGameDetails);
}
