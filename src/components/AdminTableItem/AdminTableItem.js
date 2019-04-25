import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class AdminTable extends Component {

    deleteDisc = (event) => {
        console.log( `in deleteDisc` );
        // TODO DELETE disc item from DB
        let id = event.target.value;
        this.props.dispatch( { type: 'DELETE_DISC', payload: id } );
    }
    
    render(){
        return(
                <td>
                    <button onClick={this.deleteDisc} value={this.props.disc.id}>Delete!</button>
                </td>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
export default connect( mapReduxStateToProps )(AdminTable);