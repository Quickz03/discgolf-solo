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
              <p>The Star Plastic is considered by most as the top of the line for Innova. 
              (Some may go with Champion)  This All weather grip provides the feel of Pro and 
              combines it with the durability of Champion resulting in Star Plastic.  It also 
              will retail flight characteristics better than any other plastic which is why this 
              premium product is talked about better than any other.  For any tournament or if your 
              just looking to provide your best potential on the Disc Golf Course, Star Plastic should 
              be your go-to.</p>
        </div>
        <div className="column">
        <h4>Champion</h4>
              <p >Consistency is key for perfection and the Champion Plastic provides you with an ultra 
                durable disc that can withstand the elements better than any other.  The extremely slow 
                wearing allows for the flight patterns to retain throughout use.  These discs tend to me 
                stiff and are better suited for powerful throwers.  Innova occasionally changes the flight r
                atings on Champion Plastic discs due to the stiffness presented in the disc.  Most Champion 
                disc will also be translucent. </p>
        </div>
        <div className="column">
        <h4>Pro</h4>
              <p>While Pro Plastic is not perfect, it has multiple advantages over other plastics Innova 
                offers.  The improved grip provides easier throwing capabilities, but the durability takes 
                a slight hit.  The ability for Pro Plastic is shown for having their flight characteristics 
                consistent over the DX line.  Price on this plastic allows for a premium type flight without 
                breaking the bank.  Maybe don't realize the increased glide the Pro Plastic provides for their 
                drives until they throw it for themselves.</p>
        </div>
        <div className="column">
        <h4>DX</h4>
              <p>Innova provides a wide variety of plastics, but with no question if you want value DX 
                Plastic is the way to go.  It's the least expensive out of all the plastics Innova makes 
                along with providing the widest selection of models and weights.  The grip is perfect for 
                any weather situation providing you with consistent throwing capabilities.  The DX Plastic 
                will break in over time, which means unlike other discs, the fight patterns may change 
                slightly with more wear and tear. </p>
        </div>
      </div>  
      </>
    )}
}


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);
