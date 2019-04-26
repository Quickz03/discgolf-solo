import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell';



class AdminTable extends Component {

    deleteDisc = (event) => {
        console.log( `in deleteDisc` );
        // TODO DELETE disc item from DB
        let id = event.target.value;
        this.props.dispatch( { type: 'DELETE_DISCS', payload: id } );
    }
    
    render(){
        return(
                <TableCell>
                    <Button color="primary" variant="contained"  onClick={this.deleteDisc} value={this.props.disc.id}>Delete!</Button>
                </TableCell>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
export default connect( mapReduxStateToProps )(AdminTable);