// import React from 'react';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './DiscLibrary.css';




class DiscLibrary extends Component {
  render() {
    return (
      <>
        <div>
            <h1>Disc Library</h1>
        </div>
          <div className="DiscImage">
            <img src="/images/ApeDisc.png" />
            <br />
            <button>add disc</button>
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
                <th> Glide</th>
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

export default connect(mapReduxStateToProps)(DiscLibrary);
