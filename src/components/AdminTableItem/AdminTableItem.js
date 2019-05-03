import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';




class AdminTableDelete extends Component {

    deleteDisc = (event) => {
        console.log(event);
        console.log( `in deleteDisc` );
        // TODO DELETE disc item from DB
        let id = event.target.value;
        this.props.dispatch( { type: 'DELETE_DISCS', payload: id } );
        alert("The disc has been deleted!");
    }
    
    render(){
        // console.log('this.props:', this.props );
        return(
                <td>
                    <button className="deleteButton"  onClick={this.deleteDisc} value={this.props.disc.id}>Delete!</button>
                </td>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
export default connect(mapReduxStateToProps)(AdminTableDelete);