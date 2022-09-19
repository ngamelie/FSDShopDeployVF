import React, { Component } from "react";
import { Navbar, Button, Container, Row, Nav, Image } from 'react-bootstrap';
import Navbar_ from '../common/Navbar_'
import Footer from '../common/Footer'


class Home extends Component {

  render() {

      return (
        <>
          <div>
            <Image src={ require('../../asset/images/header.jpg') }  style={{ width: 1325, height: 80 }} ></Image>
          </div>

          <Container fluid>
            <Row>
              <div className="col-2 box">
                <Nav.Link href="/">Accessories & Supplies</Nav.Link>
                <Nav.Link href="/#">Camera, Photo & Video</Nav.Link>
                <Nav.Link href="/#">Cell Phones & Accessories</Nav.Link>
                <Nav.Link href="/#">Computers & Accessories</Nav.Link>
                <Nav.Link href="/#">GPS & Navigation</Nav.Link>
                
              </div>

              <div className="col-10">
               
                <Image src={ require('../../asset/images/home.jpg') } style={{ width: 1080, height: 317 }}></Image>
                
              </div>
            </Row>
          </Container> 
        </>

      
      )
  }

}


export default Home;
