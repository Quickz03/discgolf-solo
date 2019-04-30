import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
// import Button from '@material-ui/core/Button'
// import TableCell from '@material-ui/core/TableCell';



class MyInventoryDelete extends Component {



    deleteMyDisc = (event) => {
        console.log('mydelete', event);
        console.log( `in deleteDisc` );
        // TODO DELETE disc item from my_inventory DB
        let id = event.target.value;
        this.props.dispatch( { type: 'DELETE_MY_DISCS', payload: id } );
    }
    
    render(){
        console.log('this.props mydelete:', this.props );
        return(
                <td>
                    <button onClick={this.deleteMyDisc} value={this.props.disc}>Delete!</button>
                </td>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
export default connect(mapReduxStateToProps)(MyInventoryDelete);