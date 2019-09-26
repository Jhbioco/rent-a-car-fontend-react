import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";

class Header extends Component {
  state = {};

  render() {
    const style = {
      color: "white"
    };
    return (
      <div className="container-fluid header">
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand style={{ color: "white" }} href="#">
            Rent a Car Lisbon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav">
              <Nav.Link style={style} href="#home">
                Frota
              </Nav.Link>
              <Nav.Link style={style} href="#link">
                Ofertas
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto nav">
              <Nav.Link style={style} href="#home">
                Login
                <i className="fa fa-user img-login"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
