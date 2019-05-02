import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../App/App.css';
import AdminTableItem from '../AdminTableItem/AdminTableItem';

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';


// const styles = theme => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing.unit * 6,
//         overflowX: 'auto',
//     },
//     table: {
//         width: '100%',
//         // minWidth: '350',
//     },

// });

class AdminTableDisc extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_DISCS'} );
    }

    render(){
        // const { classes } = this.props;
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

// AdminTableDisc.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
 export default connect(mapReduxStateToProps)(AdminTableDisc);