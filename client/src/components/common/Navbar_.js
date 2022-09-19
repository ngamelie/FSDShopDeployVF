import React, { Component } from "react";
import { Navbar, Button, Container, NavDropdown, Nav, Form } from 'react-bootstrap';
import Login_form from "./Login_form";


class Navbar_ extends Component {

  render() {

    return (
      <div>

        <nav class="navbar navbar-light bg-light">

          <div class="container-fluid">
              
            <div class="input-group">

              <input type="text" class="form-control" aria-label="Text input with dropdown button" />
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
              
          </div>

        </nav>

        <Navbar bg="light" variant="light">
          <Container fluid>
            <Navbar.Brand href="/">FSD Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Gammers</Nav.Link>
                <Nav.Link href="/#">Cameras</Nav.Link>
                <Nav.Link href="/#">Laptops</Nav.Link>
                <Nav.Link href="/#">TVs</Nav.Link>
                <Nav.Link href="/#">Headphones</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Login_form />
          </Container>
        </Navbar>

        
        
      </div>
    ); // return close


  } // render close

} // class Navbar close

export default Navbar_;
