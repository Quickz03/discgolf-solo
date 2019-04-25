import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../App/App.css';
import AdminTableItem from '../AdminTableItem/AdminTableItem';



class AdminTableDisc extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_DISCS'} );
    }

    render(){
        return(
            <table align="center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Speed</th>
                        <th>Glide</th>
                        <th>Turn</th>
                        <th>Fade</th>
                        <th>Plastic</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
 export default connect(mapReduxStateToProps)(AdminTableDisc);