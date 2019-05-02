import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
// import Button from '@material-ui/core/Button'
// import TableCell from '@material-ui/core/TableCell';



class MyInventoryDelete extends Component {


    deleteMyDisc = (event) => {
        // TODO DELETE disc item from my_inventory DB
        let id = event.target.getAttribute('value');
        this.props.dispatch({ type: 'DELETE_MY_DISCS', payload: id });
    }

    render() {        
        return (
            <td>
                <button onClick={this.deleteMyDisc} value={this.props.inventoryDisc}>Delete!</button>
            </td>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(MyInventoryDelete);