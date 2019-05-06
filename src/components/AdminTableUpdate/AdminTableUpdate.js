import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';



class AdminTableUpdate extends Component {





    editDisc = (disc) => {
        console.log('showing disc');
        console.log('disc data:', this.props.reduxState.discs);
        this.setState({
            newDisc: {
                name: disc.name,
                image: disc.image,
                speed: disc.speed,
                glide: disc.glide,
                turn: disc.turn,
                fade: disc.fade,
                plastic: disc.plastic,
                type: disc.type,
            }
        })
    }


    render() {
        return (
            <td>
                <button className="deleteButton" onClick={this.editDisc} value={this.props.disc.id}>Update</button>
            </td>
        );
    }


}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(AdminTableUpdate);