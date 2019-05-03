import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MyInventory.css';
import MyInventoryDelete from '../MyInventoryDelete/MyInventoryDelete';



class MyInventory extends Component {


  state = {
    imageToShow: '',
    name: ''

  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_MY_DISCS' });
  }

  deleteMyDisc = (mydisc) => () => {
    console.log('deleting from my inventory');
    console.log(mydisc);
    let action = { type: "DELETE_MY_DISCS", payload: mydisc };
    this.props.dispatch(action);
  }

  showDisc = (inventoryDisc) => {
    console.log('showing disc');
    console.log('disc data:', this.props.reduxState.inventoryDisc);
    this.setState({
      imageToShow: inventoryDisc.disc_image,
      name: inventoryDisc.name
    })
  }


  render() {
    return (
      <>
        <div>
          <h1>My Inventory</h1>
        </div>
        <div id="DiscImage">
            <img src={this.state.imageToShow} alt="" />
              <br />
                <p className="imageName">{this.state.name}</p>
              <br />
            <div className="buttonZone">
              {/* <button className='addButton' onClick={this.addDiscToInv}>Add Disc</button> */}
            </div>
        </div>
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
            {this.props.reduxState.mydiscs.map((inventoryDisc, i) =>
              <tr key={i}
                onClick={() => this.showDisc(inventoryDisc)}>
                <td>{inventoryDisc.name}</td>
                <td>{inventoryDisc.speed}</td>
                <td>{inventoryDisc.glide}</td>
                <td>{inventoryDisc.turn}</td>
                <td>{inventoryDisc.fade}</td>
                <td>{inventoryDisc.plastic}</td>
                <td>{inventoryDisc.disc_type_name}</td>
                <MyInventoryDelete inventoryDisc={inventoryDisc.inventory_id} />
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
