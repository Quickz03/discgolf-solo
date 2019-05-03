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
        <table className="DiscLibTable" align="center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Speed</th>
                <th>Glide</th>
                <th>Turn</th>
                <th>Fade</th>
                <th>Plastic</th>
                <th>Type</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.reduxState.discs.map(disc =>
                  <tr key={disc.id} disc={disc}>
                      <td>{disc.name}</td>
                      <td>{disc.speed}</td>
                      <td>{disc.glide}</td>
                      <td>{disc.turn}</td>
                      <td>{disc.fade}</td>
                      <td>{disc.plastic}</td>
                      <td>{disc.type}</td>
                      <AdminTableItem disc={disc} />
                  </tr>
              )}
            </tbody>
          </table>

        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
 export default connect(mapReduxStateToProps)(AdminTableDisc);