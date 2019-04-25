// adminForm/discLibrary render - will hold types from server
// action SET_TYPE sent by saga with payload
// Used to store the disc types (e.g. 'Driver', 'Midrange', 'Putter')
const types = (state = [], action) => {
    switch (action.type) {
        case 'SET_TYPES':
            return action.payload;
        default:
            return state;
    }
}


// type will be on the redux state at:
// state.type
export default types;