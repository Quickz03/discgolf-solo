import { put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';


function* deleteDisc(action) {
    console.log('Hit the deleteDisc', action);
    try {
        // Attempt deleting disc, then calling getDisc
        yield axios.delete(`/api/discs/${action.payload}`);
        yield put({
            type: 'GET_DISCS'
        });
    } catch (error) {
        // Log and alert if an error occurs
        console.log(`Couldn't delete disc`, error);
        alert(`Sorry, couldn't delete your disc. Try again later`);
    }
}


function* deleteDiscSaga() {
    yield takeEvery('DELETE_DISCS', deleteDisc);
}

export default deleteDiscSaga;