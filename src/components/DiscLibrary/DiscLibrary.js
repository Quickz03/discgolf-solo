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
            <img src="/images/ApeDisc.png" alt="''" />
            <br />
            <div className="buttonZone">
            <button className='addButton'>add disc</button>
            </div>
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
              {
              this.props.reduxState.discs.map(disc =>
                  <tr key={disc.id}>
                      <td>{disc.name}</td>
                      <td>{disc.speed}</td>
                      <td>{disc.glide}</td>
                      <td>{disc.turn}</td>
                      <td>{disc.fade}</td>
                      <td>{disc.plastic}</td>
                      <td>{disc.type}</td>
                  </tr>
              )}
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
