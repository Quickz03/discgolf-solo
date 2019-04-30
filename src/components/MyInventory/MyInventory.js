// import React from 'react';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './MyInventory.css';
import MyInventoryDelete from '../MyInventoryDelete/MyInventoryDelete';



class MyInventory extends Component {

    //   componentDidMount() {
    //     this.props.dispatch( {type: 'SET_MY_DISCS'} );
    // }


    

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
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
              {
              this.props.reduxState.mydiscs.map(mydisc =>
                  <tr key={mydisc.id} 
                  // onClick={this.showDisc}
                  >
                      <td>{mydisc.name}</td>
                      <td>{mydisc.speed}</td>
                      <td>{mydisc.glide}</td>
                      <td>{mydisc.turn}</td>
                      <td>{mydisc.fade}</td>
                      <td>{mydisc.plastic}</td>
                      <td>{mydisc.type}</td>
                      <MyInventoryDelete mydisc={mydisc} />

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

export default connect(mapReduxStateToProps)(MyInventory);
