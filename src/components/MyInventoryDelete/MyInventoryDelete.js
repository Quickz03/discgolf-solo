import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
// import Button from '@material-ui/core/Button'
// import TableCell from '@material-ui/core/TableCell';



class MyInventoryDelete extends Component {


    deleteMyDisc = (event) => {
        console.log('mydelete', event);
        console.log( `in deleteDisc` );
        console.log('event target value', event.target.value );
        
        // TODO DELETE disc item from my_inventory DB
        let id = event.target.getAttribute('value');
        
        this.props.dispatch( { type: 'DELETE_MY_DISCS', payload: id } );
    }
    
    render(){
        console.log('this.props mydelete:', this.props );
        return(
                <td>
                    <button onClick={this.deleteMyDisc} value={this.props.mydisc}>Delete!</button>
                </td>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
export default connect(mapReduxStateToProps)(MyInventoryDelete);