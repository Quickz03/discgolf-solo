import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Home.css';

class Home extends Component {
  render() {
      return (
      <>
        <div>
          <h1 id="home">
            Home
          </h1>
        </div>
        <div className="ratings">
          <img src="/images/flight-ratings2.png" alt="''" />
        </div>
        <div>

        </div>
      </>
    )}
}


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);
