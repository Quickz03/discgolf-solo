import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addDisc(action) {
    try {
        yield axios.post('/api/discs', action.payload)
        yield put({
            type: 'GET_DISCS'
        })
    } catch (error) {
        console.log(`Couldn't add disc`, action.payload, error);
        alert(`Sorry, couldn't add the disc. Try again later`);
    }
}


function* addDiscSaga() {
    yield takeEvery('ADD_DISCS', addDisc);
}

export default addDiscSaga;