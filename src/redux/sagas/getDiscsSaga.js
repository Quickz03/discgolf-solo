import { put, } from 'redux-saga/effects';
import axios from 'axios';


function* getDiscs(action) {
    console.log(`Hit the getDiscs saga`, action);
    try {
        const getResponse = yield axios.get('/api/discs');
        console.log(`getResponse is: `, getResponse);
        const action = {
            type: 'SET_DISCS',
            payload: getResponse.data
        };
        yield put(action);
        console.log('sent off SET_DISCS action');

    } catch (error) {
        console.log(`Couldn't get discs`, error);
        alert(`Sorry, couldn't get the discs. Try again later`);
    }
} //   end getDiscs


// function* getDiscs() {
//     yield takeEvery('DISC', getDiscs);
// }

export default getDiscs;