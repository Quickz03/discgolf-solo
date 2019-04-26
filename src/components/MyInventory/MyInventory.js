// import React from 'react';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './MyInventory.css';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MyInventory extends Component {


  render() {
    return (
  <>
    <div>
        <h1>My Inventory</h1>
    </div>
    <div className="MyDiscImage">
      <img src="images/ApeDisc.png" alt="''" />
      <br/>
      <h4>Ape</h4>
    </div>
  {/* <div className="DiscLibTable"> */}
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br /> 

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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ape</td>
          <td>13</td>
          <td>5</td>
          <td>0</td>
          <td>-2</td>
          <td>Premium</td>
          <td>Driver</td>
        </tr>
      </tbody>
    </table>
  {/* </div> */}
  </>

  )}
}


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MyInventory);
