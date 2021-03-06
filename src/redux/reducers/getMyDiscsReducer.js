// myinventory render - will hold discs from server
// action SET_MY_DISCS sent by saga with payload
// Used to store discs returned from the server
const mydiscs = (state = [], action) => {
    switch (action.type) {
        case 'SET_MY_DISCS':
        console.log('in mydisc reducer', action.payload);
            return action.payload;
        default:
            return state;
    }
}


// discs will be on the redux state at:
// state.discs
export default mydiscs;