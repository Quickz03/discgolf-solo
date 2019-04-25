import { put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';


function* deleteDisc(action) {
    console.log('Hit the deleteProject', action);
    try {
        // Attempt deleting project, then calling getProjectList
        yield axios.delete(`/portfolio/${action.payload}`);
        yield put({
            type: 'GET_PROJECTS'
        });
    } catch (error) {
        // Log and alert if an error occurs
        console.log(`Couldn't delete project`, error);
        alert(`Sorry, couldn't delete your project. Try again later`);
    }
}