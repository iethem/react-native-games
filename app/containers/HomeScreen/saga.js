import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { API_TOP10_GAMES } from 'utils/paths';
import { GET_TOP10_GAMES } from 'containers/App/constants';
import {
  getTop10GamesSuccess,
  getTop10GamesFailure,
} from 'containers/App/actions';

export function* getTop10Games() {
  const requestURL = API_TOP10_GAMES;
  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'react-native-boilerplate-example-app',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, options);
    yield put(getTop10GamesSuccess(response.results));
  } catch (error) {
    yield put(getTop10GamesFailure(error));
  }
}

// Individual exports for testing
export default function* homeScreenSaga() {
  yield takeLatest(GET_TOP10_GAMES, getTop10Games);
}
