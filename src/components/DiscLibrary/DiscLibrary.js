// import React from 'react';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './DiscLibrary.css';
import ReactDOM from 'react-dom';




class DiscLibrary extends Component {


    componentDidMount() {
        this.props.dispatch( {type: 'GET_DISCS'} );
    }



    addDiscToInv = (disc) => {
      console.log('adding to my inventory');
      console.log(disc);      
      let action = { type: "ADD_MY_DISCS", payload: disc };
        this.props.dispatch(action);
    }

    showDisc = () => {
      console.log('showing disc');
      console.log('disc data:', this.props.reduxState.discs);    
      ReactDOM.render( <p><img src="/images/BossDisc.png" alt="''" /></p>, document.getElementById('DiscImage') );
    }

  render() {
    // console.log('this.props', this.props);
    
    return (
      <>
        <div>
            <h1>Disc Library</h1>
        </div>
          <div id="DiscImage">
            <img src="/images/ApeDisc.png" alt="''" />
            <br />
            <div className="buttonZone">
            {/* <button className='addButton' onClick={this.addDiscToInv}>Add Disc</button> */}
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
                <th>Glide</th>
                <th>Turn</th>
                <th>Fade</th>
                <th>Plastic</th>
                <th>Type</th>
                <th>My Inventory</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.reduxState.discs.map((disc, i) =>
                  <tr key={disc.id} 
                  // onClick={this.showDisc}
                  >
                      <td>{disc.name}</td>
                      <td>{disc.speed}</td>
                      <td>{disc.glide}</td>
                      <td>{disc.turn}</td>
                      <td>{disc.fade}</td>
                      <td>{disc.plastic}</td>
                      <td>{disc.type}</td>
                      <td><button className='addButton' onClick={() => this.addDiscToInv(disc)}>Add Disc</button></td>
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
