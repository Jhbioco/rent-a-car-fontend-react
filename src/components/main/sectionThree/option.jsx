import React, { Component } from "react";
import "./style.css";
import frota from "./img/gluecksauto-global.png";
import estacao from "./img/bmw-3er-kombi-grau-2015.png";
import oferta from "./img/mercedes.png";
class Option extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 img-col-section3">
            <img className="img-section3" src={frota} alt=""></img>
            <div className="img-card-section3 text-center">
              <p>Frota</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 img-col-section3">
            <img className="img-section3" src={estacao} alt=""></img>
            <div className="img-card-section3 text-center">
              <p>Estações</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 img-col-section3">
            <img className="img-section3" src={oferta} alt=""></img>
            <div className="img-card-section3 text-center">
              <p>Oferta</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Option;
