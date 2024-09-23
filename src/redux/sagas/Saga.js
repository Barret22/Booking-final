import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchHotelsSuccess, fetchHotelsFailure } from '../actions/Actions.js';

function* fetchHotelsSaga(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:5000/hotels', action.payload.formData);

    if (response.status === 200) {
      yield put(fetchHotelsSuccess(response.data));
      // Используйте переданный navigate
      action.payload.navigate('/hotels');
    }
  } catch (error) {
    console.error('Error fetching hotels:', error);
    yield put(fetchHotelsFailure(error.message));
  }
}

function* mySaga() {
  yield takeLatest('FETCH_HOTELS_REQUEST', fetchHotelsSaga);
}

export default mySaga;
