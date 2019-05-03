import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';



class AdminTableUpdate extends Component {





    render() {
        return (
            <td>
                <button className="deleteButton" onClick={this.deleteDisc} value={this.props.disc.id}>Delete!</button>
            </td>
        );
    }


}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(AdminTableUpdate);