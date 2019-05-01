import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addDiscMyInv(action) {
    try {
        console.log('addDiscMyInv // action.payload:', action.payload);
        
        yield axios.post('/api/discs/myinventory', action.payload)
        yield put({
            type: 'GET_MY_DISCS'
        })
    } catch (error) {
        console.log(`Couldn't add disc to your inventory`, action.payload, error);
        alert(`Sorry, couldn't add the disc to your inventory. Try again later`);
    }
}


function* addMyDiscSaga() {
    yield takeEvery('ADD_MY_DISCS', addDiscMyInv);
}

export default addMyDiscSaga;