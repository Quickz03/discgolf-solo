// adminForm/discLibrary render - will hold discs from server
// action SET_DISCS sent by saga with payload
// Used to store discs returned from the server
const discs = (state = [], action) => {
    switch (action.type) {
        case 'SET_DISCS':
            return action.payload;
        default:
            return state;
    }
}


// discs will be on the redux state at:
// state.discs
export default discs;