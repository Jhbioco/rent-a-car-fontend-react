import React, { Component } from "react";
import "./style.css";

class Banner extends Component {
  state = {};
  render() {
    return (
      <section className="container banner">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img
              className="img"
              src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></img>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
