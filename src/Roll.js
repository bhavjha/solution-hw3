import React, { Component } from 'react';
import './Roll.css';

class Roll extends Component {
  render() {
    return(
        <div className="item">
                <img className="item-img" src={this.props.imageURL} alt="original cinnamon roll picture"></img>
                <div className="item-desc">
                  <div className="item-name">
                    {this.props.itemName}
                  </div>
                  <div className="item-glazing">
                    <label htmlFor="glaze-original">Glazing:</label>
                    <select name="glaze-original" id="glaze-original">
                      <option value="keeporiginal">Keep original</option>
                      <option value="sugarmilk">Sugar milk</option>
                      <option value="vanillamilk">Vanilla milk</option>
                      <option value="doublechocolate">Double chocolate</option>
                    </select>
                  </div>
                  <div className="item-pack-size">
                    <p className="pack-p">Pack size</p>
                    <div className="pack">
                      <button type="button" className="pack-size p1">1</button>
                      <button type="button" className="pack-size p3">3</button>
                      <button type="button" className="pack-size p6">6</button>
                      <button type="button" className="pack-size p12">12</button>
                    </div>
                  </div>
                  <div className="item-final">
                    <p className="item-cost" id="originalCinnamonRoll">{this.props.itemPrice}</p>
                    <button className="item-cart" type="button" >Add to Cart</button>
                  </div>
                </div>
            </div>
    );
  }
}

export default Roll;