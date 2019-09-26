import React, { Component } from "react";
import "./style.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5">
        <section className="search-box">
          <div className="row d-flex justify-content-center search-input">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="data">
                <span>Procurar por marca</span>
              </div>
              <div className="input-group">
                <div className="form-group-prepend group">
                  <button type="button" className="btn btn-see-all">
                    Procurar todos os carros
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Procurar por marca..."
                />
                <div className="form-group-append group">
                  <button type="button" className="btn btn-search">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
