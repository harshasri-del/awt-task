import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarHeader = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="container"
      style={{
        width: "90%",
        margin: "0 auto",
        borderRadius: "30px",
        marginTop: "20px",
      }}
    >
      <Container>
        <Navbar.Brand href="#Menu">MENU</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ gap: "50px" }}>
            <Nav.Link href="#home" style={{ marginLeft: "20px" }}>
              HOME
            </Nav.Link>
            <Nav.Link href="#whoweare">WHO WE ARE</Nav.Link>
            <Nav.Link href="#oursolutions">OUR SOLUTIONS</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#products">PRODUCTS</Nav.Link>
            <Nav.Link href="#blogs">BLOGS</Nav.Link>
            <Nav.Link href="#contactus">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// const Navbar = () => {
//     return (
//       <>
//       <Button variant="primary">Primary</Button>

//       </>
//     );
//   }

export default NavbarHeader;
