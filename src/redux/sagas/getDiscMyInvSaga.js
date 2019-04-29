import { put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';


function* getMyDiscs(action) {
    console.log(`Hit the getMyDiscs saga`, action);
    try {
        const getResponse = yield axios.get('/api/discs/myinventory');
        console.log(`getResponse is: `, getResponse);
        const action = {
            type: 'GET_MY_DISCS',
            payload: getResponse.data
        };
        yield put(action);
        console.log('sent off GET_MY_DISCS action');

    } catch (error) {
        console.log(`Couldn't get discs`, error);
        alert(`Sorry, couldn't get the discs. Try again later`);
    }
} //   end getMyDiscs


function* getMyDiscsSaga() {
    yield takeEvery('GET_MY_DISCS', getMyDiscs);
}

export default getMyDiscsSaga;


