import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect, Switch, } from 'react-router-dom';

import {connect} from 'react-redux';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import MyInventory from '../MyInventory/MyInventory';
import Home from '../Home/Home';
import DiscLibrary from '../DiscLibrary/DiscLibrary';
import AdminDisc from '../AdminDisc/AdminDisc';

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import theme from '../App/theme';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
        // <MuiThemeProvider theme={theme}>
      <Router>
        <div className="AppDiv">
          <Header />
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/myinventory will show the my inventory page.
            This is a route anyone can see, no login necessary */}
            <ProtectedRoute
              exact
              path="/myinventory"
              component={MyInventory}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <Route
              exact
              path="/home"
              component={Home}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the disclibrary page instead. */}
            <ProtectedRoute
              exact
              path="/disclibrary"
              component={DiscLibrary}
            />

            < ProtectedRoute
              exact
              path="/admin"
              component={AdminDisc}
            /> 
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          {/* <Footer /> */}
            {/* <Route
              exact
              path="/admin"
              component={AdminDisc}
            />  */}
        </div>
      </Router>
      // </MuiThemeProvider>
  )}
}

export default connect()(App);
