import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateDisc(action) {
    console.log('Hit the updateDisc', action);
    try {
        // Attempt updating disc, then calling getDisc
        yield axios.put(`/api/discs/${action.payload}`);
        yield put({
            type: 'GET_DISCS'
        });
    } catch (error) {
        // Log and alert if an error occurs
        console.log(`Couldn't update disc`, error);
        alert(`Sorry, couldn't update your disc. Try again later`);
    }
}


function* updateDiscSaga() {
    yield takeEvery('UPDATE_DISCS', updateDisc);
}

export default updateDiscSaga;