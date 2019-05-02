import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* deleteMyDisc(action) {
    console.log('Hit the deleteMyDisc', action);
    try {
        // Attempt deleting disc
        console.log('payload', action.payload);

        yield axios.delete(`/api/discs/myinventory/${action.payload}`);
        yield put({
            type: 'GET_MY_DISCS'
        });
    } catch (error) {
        // Log and alert if an error occurs
        console.log(`Couldn't delete disc`, error);
        alert(`Sorry, couldn't delete your disc. Try again later`);
    }
}


function* deleteMyDiscSaga() {
    yield takeEvery('DELETE_MY_DISCS', deleteMyDisc);
}

export default deleteMyDiscSaga;