import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Home.css';

class Home extends Component {
  render() {
      return (
      <>
        <div>
          <h1 className="home">
            Home
          </h1>
        </div>
        <div className="ratings">
          <img src="/images/flight-ratings2.png" alt="''" />
        </div>
      <div className="row">
      <h3 className="Plastics">Plastics</h3>
        <div className="column">
        <h4>Star</h4>
          <img src="/images/StarPlastic2.png" alt="''" />
        </div>
        <div className="column">
        <h4>Champion</h4>
          <img src="/images/ChampionPlastic2.png" alt="''" />
        </div>
        <div className="column">
        <h4>Pro</h4>
          <img src="/images/ProPlastic2.png" alt="''" />
        </div>
        <div className="column">
        <h4>DX</h4>
          <img src="/images/DXPlastic2.png" alt="''" />
        </div>
      </div>  
      </>
    )}
}


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);
