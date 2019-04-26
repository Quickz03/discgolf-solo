import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../App/App.css';
import AdminTableItem from '../AdminTableItem/AdminTableItem';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 6,
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        // minWidth: '350',
    },

});

class AdminTableDisc extends Component {

    componentDidMount() {
        this.props.dispatch( {type: 'GET_DISCS'} );
    }

    render(){
        const { classes } = this.props;
        return(
            <Grid container justify="center" alignItems="center" direction="column" color="primary">
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Speed</TableCell>
                                    <TableCell>Glide</TableCell>
                                    <TableCell>Turn</TableCell>
                                    <TableCell>Fade</TableCell>
                                    <TableCell>Plastic</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                                <TableBody>                                                            {
                                    this.props.reduxState.discs.map(disc =>
                                        <TableRow key={disc.id}>
                                            <TableCell>{disc.name}</TableCell>
                                            <TableCell>{disc.speed}</TableCell>
                                            <TableCell>{disc.glide}</TableCell>
                                            <TableCell>{disc.turn}</TableCell>
                                            <TableCell>{disc.fade}</TableCell>
                                            <TableCell>{disc.plastic}</TableCell>
                                            <TableCell>{disc.type}</TableCell>
                                            <AdminTableItem disc={disc} />
                                        </TableRow>
                                    )}
                                </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

AdminTableDisc.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
 export default connect(mapReduxStateToProps)(withStyles(styles)(AdminTableDisc));