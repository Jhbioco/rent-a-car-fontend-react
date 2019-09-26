import React, { Component } from "react";
import "./style.css";
import mercedes from "./img/mb-a-klasse-5d-weiss-2018.png";
import renault from "./img/renault-grand-scenic-5d-silber-2018.png";
import bmw from "./img/bmw-1er-5d-weiss-2017.png";
class Brands extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5">
        <section>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 brands">
              <img className="img" src={mercedes} alt="xpto"></img>
              <div className="description text-center">
                <p>Mercedes AMG</p>
              </div>
              <button className="btn-ver " type="button">
                Ver Todos
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 brands">
              <img className="img" src={renault} alt="xpto"></img>
              <div className="description text-center">
                <p>Renault</p>
              </div>
              <button className="btn-ver " type="button">
                Ver Todos
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 brands">
              <img className="img" src={bmw} alt="xpto"></img>
              <div className="description text-center">
                <p>BMW</p>
              </div>
              <button className="btn-ver " type="button">
                Ver Todos
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Brands;
