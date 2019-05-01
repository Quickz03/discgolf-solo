import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MyInventory.css';
import MyInventoryDelete from '../MyInventoryDelete/MyInventoryDelete';



class MyInventory extends Component {

  //   componentDidMount() {
  //     this.props.dispatch( {type: 'GET_MY_DISCS'} );
  // }

  // deleteMyDisc = (mydisc)=>() => {
  //   console.log('deleting from my inventory');
  //   console.log(mydisc);
  //   let action = { type: "DELETE_MY_DISCS", payload: mydisc };
  //   this.props.dispatch(action);
  // }


  render() {
    return (
      <>
        <div>
          <h1>My Inventory</h1>
        </div>
        <div className="MyDiscImage">
          <img src="images/ApeDisc.png" alt="''" />
          <br />
          <h4>Ape</h4>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {JSON.stringify(this.props.reduxState.mydiscs)}

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
              this.props.reduxState.mydiscs.map((mydisc, i) =>
                <tr key={i}
                // onClick={this.showDisc}
                >
                  <td>{mydisc.name}</td>
                  <td>{mydisc.speed}</td>
                  <td>{mydisc.glide}</td>
                  <td>{mydisc.turn}</td>
                  <td>{mydisc.fade}</td>
                  <td>{mydisc.plastic}</td>
                  <td>{mydisc.type}</td>
                  <MyInventoryDelete mydisc={mydisc.id} />
                  {/* <td><button className='mydeleteButton' onClick={this.deleteMyDisc(mydisc)}>Delete Disc</button></td> */}

                </tr>
              )}
          </tbody>
        </table>
        {/* </div> */}
      </>

    )
  }
}


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MyInventory);
