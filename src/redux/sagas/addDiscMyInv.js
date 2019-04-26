import { put,takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addDiscMyInv(action) {
    try {
        yield axios.post('/api/discs', action.payload)
        yield put({
            type: 'GET_DISCS'
        })
    } catch (error) {
        console.log(`Couldn't add disc to your inventory`, action.payload, error);
        alert(`Sorry, couldn't add the disc to your inventory. Try again later`);
    }
}


function* addMyDiscSaga() {
    yield takeEvery('ADD_MYINV', addDiscMyInv);
}

export default addMyDiscSaga;