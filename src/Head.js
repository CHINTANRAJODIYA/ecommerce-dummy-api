import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FaOpencart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Head() {
  return (
    <>
         <Navbar expand="lg" className="bg-body-tertiaryy">
                <Container>
                    <Navbar.Brand href="#home" className='logo'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home GIT</Nav.Link>
                            <Nav.Link href="#home">Sell</Nav.Link>
                            <Nav.Link href="#home">Bestsellers</Nav.Link>
                            <Nav.Link href="#home">Today's Deals</Nav.Link>
                            <Nav.Link href="#link">Fashion</Nav.Link>
                            <Nav.Link href="#link">Prime</Nav.Link>
                        </Nav>
                        <Nav>
                    <Link to='/cart' className='cart-size'><FaOpencart /></Link>
          </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
  )
}

export default Head