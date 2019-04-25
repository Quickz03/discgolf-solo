import { put, } from 'redux-saga/effects';
import axios from 'axios';


function* getTypes(action) {
    console.log(`Hit the getTypes saga`, action);
    try {
        const response = yield axios.get('/api/discs/types');
        yield put({
            type: 'SET_TYPES',
            payload: response.data
        });
    } catch (error) {
        console.log(`Couldn't get type.`, error);
        alert(`Sorry couldn't get type. Try again later.`);
    }
} // end getTypes


// function* getTypes() {
//     yield takeEvery('GET_TYPES', getTypes);
// }

export default getTypes;