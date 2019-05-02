import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, } from 'react-router-dom';

import '../App/App.css';

import AdminFormDisc from '../AdminFormDisc/AdminFormDisc';
import AdminTableDisc from '../AdminTableDisc/AdminTableDisc';


class AdminDisc extends Component {


    render(){
        return(
            <Router>
            <div className="adminDiv">               
                <AdminFormDisc />
                <AdminTableDisc />
            </div>
            </Router>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect(mapReduxStateToProps)(AdminDisc);